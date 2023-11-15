import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Post = ({ post, events, setEvents }) => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);
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
            const res = await axios.delete(`http://localhost:3000/events/delete-event/${post._id}`, {
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
    return (
        <div>
            <div className="border-2 border-sky-400 rounded-lg m-10 p-10 pt-5 flex flex-col">
                {isLoggedIn && <div className="flex justify-start items-start">
                    <button className="mx-2 p-2 text-sm border-2 rounded-lg">Edit</button>
                    <button className="mx-2 p-2 text-sm border-2 rounded-lg" onClick={deletePost}>Delete</button>
                </div>}
                <p className="text-lg font-bold p-2 text-center">{post.title}</p>
                <p className="p-2 text-center">{formatDate(post.day)}</p>
                <p className="p-2">{post.description}</p>
            </div>
        </div>
    );
}

export default Post;