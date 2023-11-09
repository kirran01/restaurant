import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-modal';

const Events = () => {
    const [events, setEvents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [eventInput, setEventInput] = useState({
        title: '',
        description: ''
    })
    const handleEventInput = (e) => {
        setEventInput({ ...eventInput, [e.target.name]: e.target.value })
    }
    const submitEvent = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/events/create-event`, {
                title: eventInput.title,
                description: eventInput.description
            },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                })
            if (res) {
                console.log(res.data, 'rd')
                closeModal()
                setEventInput({
                    title: '',
                    description: ''
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
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
            const res = await axios.get(`http://localhost:3000/events/get-events`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const gotEvents = res.data
                setEvents(gotEvents)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getEvents()
    }, [events])
    //j.a
    return (
        <div className="pt-14 font-serif bg-orange-100">
            <div className="bg-rose-200 p-4 py-10">
                <p className="text-md font-bold lg:text-3xl text-center my-4">Events</p>
                <p className="text-center text-sm lg:text-sm my-2">Join us for some great times and even better food...</p>
                <p className="text-center" type="" onClick={openModal}>New</p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex font-serif flex-col items-center">
                    <div>
                        <p className="text-lg">Create an Event</p>
                    </div>
                    <form className="flex flex-col items-center" action="" onSubmit={submitEvent}>
                        <div className="flex flex-col items-center m-2">
                            <label>Title</label>
                            <input onChange={handleEventInput} value={eventInput.title} className="border-2" name={"title"} type="text" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Date</label>
                            <input className="border-2" type="date" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Summary</label>
                            <textarea onChange={handleEventInput} value={eventInput.description} className="border-2" name={"description"} type="text" />
                        </div>
                        <button className="border-2 p-2 m-2">Submit</button>
                    </form>
                </div>
            </Modal>
            <div>
                <div>
                    {events.map(e => {
                        return (<>
                            <div className="border-2 border-sky-400 rounded-lg m-10 p-10 flex flex-col items-center">
                                <p className="text-lg font-bold p-2">{e.title}</p>
                                <p className="p-2">{formatDate(e.day)}</p>
                                <p className="p-2">{e.description}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Events;
