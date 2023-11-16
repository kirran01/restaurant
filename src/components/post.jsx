import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Post = ({ post, events, setEvents }) => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    const [postInput, setPostInput] = useState({
        title: post.title,
        description: post.description,
        day: formatDate(post.day)
    })
    const handlePostInput = (e) => {
        setPostInput({ ...postInput, [e.target.name]: e.target.value })
    }
    const [modalIsOpen, setIsOpen] = useState(false);
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
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }
    const deletePost = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}/events/delete-event/${post._id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const filteredForDelete = events.filter(e => e._id !== post._id)
                setEvents(filteredForDelete)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const editPost = async (e) => {
        e.preventDefault()
        try {
            const date = new Date(postInput.day);
            date.setDate(date.getDate() + 1);
            const adjustedDate = date.toISOString().split('T')[0];
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/events/update-event/${post._id}`, {
                title: postInput.title,
                description: postInput.description,
                day: adjustedDate
            }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const updatedEvent = res.data
                const updatedEvents = events.map(event => {
                    if (event._id === post._id) {
                        return updatedEvent;
                    }
                    return event;
                });
                setEvents(updatedEvents)
                closeModal()
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className="border-2 border-sky-400 rounded-lg m-10 p-6 pt-5 flex flex-col">
                {isLoggedIn && <div className="flex items-center justify-center md:justify-start lg:justify-start md:items-start lg:items-start">
                    <button className="mx-2 p-2 text-sm border-2 rounded-lg" onClick={openModal}>Edit</button>
                    <button className="mx-2 p-2 text-sm border-2 rounded-lg" onClick={deletePost}>Delete</button>
                </div>}
                <p className="text-lg font-bold p-2 text-center">{post.title}</p>
                <p className="p-2 text-center">{formatDate(post.day)}</p>
                <p className="p-2">{post.description}</p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div>
                    <form className="flex flex-col items-center" action="" onSubmit={editPost}>
                        <div className="flex flex-col items-center m-2">
                            <label>Title</label>
                            <input onChange={handlePostInput} value={postInput.title} className="border-2" name={"title"} type="text" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Date</label>
                            <input className="border-2" onChange={handlePostInput} value={postInput.day} name="day" type="date" />
                        </div>
                        <div className="flex flex-col items-center m-2">
                            <label>Summary</label>
                            <textarea onChange={handlePostInput} value={postInput.description} className="border-2" name={"description"} type="text" />
                        </div>
                        <button className="border-2 p-2 m-2">Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Post;