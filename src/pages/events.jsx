import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import Modal from 'react-modal';
import Post from '../components/post'
import Footer from '../components/footer'
import moment from 'moment';

const Events = () => {
    const [error, setError] = useState(false)
    const [events, setEvents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    const [eventInput, setEventInput] = useState({
        title: '',
        description: '',
        day: ''
    })
    const handleEventInput = (e) => {
        setEventInput({ ...eventInput, [e.target.name]: e.target.value })
    }
    const submitEvent = async (e) => {
        e.preventDefault()
        try {
            const date = new Date(eventInput.day);
            date.setDate(date.getDate() + 1);
            const adjustedDate = date.toISOString().split('T')[0];
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/events/create-event`, {
                title: eventInput.title,
                description: eventInput.description,
                day: adjustedDate
            },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                })
            if (res.data.errors) {
                setError(true)
            } else {
                const newEvent = res.data;
                setEvents(prevEvents => [newEvent, ...prevEvents]);
                closeModal()
                setEventInput({
                    title: '',
                    description: '',
                    day: ''
                })
            }
        } catch (err) {
            setError(true)
            console.log(err)
        }
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
        setError(false)
        setEventInput({
            title: '',
            description: ''
        })
    }
    const customStyles = {
        content: {
            borderRadius: '10px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    function formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }
    const getEvents = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/events/get-events`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const gotEvents = res.data
                const sortedEvents = gotEvents.sort((a, b) => new Date(a.day) - new Date(b.day));
                console.log(res.data, 'events')
                setEvents(sortedEvents)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getEvents()
    }, [])
    return (
        <div className="pt-14 font-serif bg-orange-100">
            <div className="bg-rose-200 p-4 py-10 flex flex-col items-center">
                <p className="text-lg font-bold lg:text-3xl md:lg:text-3xl text-center my-4">Events</p>
                <p className="text-center text-sm lg:text-sm my-2">Join us for some great times and even better food...</p>
                {isLoggedIn &&
                    <button className="text-center bg-black hover:bg-slate-800 text-white p-2 m-2 mt-4 rounded-lg" onClick={openModal}>New</button>
                }
            </div>
            <div className={`${events.length <= 2 ? 'h-screen' : ''} flex flex-col items-center justify-center`}>
                {events.length > 0 ? (
                    <div className="w-full">
                        {events.map(e => (
                            <Post key={e._id} post={e} events={events} setEvents={setEvents} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <p className="lg:text-lg md:text-lg text-md">No events yet...</p>
                        <p className="lg:text-lg md:text-lg text-md">Check us again later!</p>
                    </div>
                )}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex font-serif flex-col items-center">
                    <div>
                        {error ?
                            <p className="text-lg">Field(s) are missing</p>
                            : <p className="text-lg">Create an Event</p>
                        }
                    </div>
                    <form className="flex flex-col items-center" action="" onSubmit={submitEvent}>
                        <div className="flex flex-col items-center m-2">
                            <label>Title</label>
                            <input onChange={handleEventInput} value={eventInput.title} className="border-2" name={"title"} type="text" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Date</label>
                            <input className="border-2" onChange={handleEventInput} value={eventInput.day} name="day" type="date" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Summary</label>
                            <textarea onChange={handleEventInput} value={eventInput.description} className="border-2" name={"description"} type="text" />
                        </div>
                        <button className="border-2 p-2 m-2">Submit</button>
                    </form>
                </div>
            </Modal>
            <Footer />
        </div>
    );
}

export default Events;