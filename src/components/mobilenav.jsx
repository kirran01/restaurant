import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';

const Mobilenav = ({ closeModal }) => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    return (
        <div className='flex flex-col text-center p-5'>
            <ul>
                <div className='flex flex-col'>
                    <Link className='m-5' to={'/menu'} onClick={closeModal}>Menu</Link>
                    <Link className='m-5' to={'/events'} onClick={closeModal}>Events</Link>
                    {isLoggedIn &&
                        <Link onClick={() => {
                            logOut();
                            // Call your second function here
                            closeModal()
                        }} className='lg:text-white md:text-white cursor-pointer m-5'>
                            Log Out
                        </Link>
                    }
                </div>
            </ul>
        </div>
    );
}

export default Mobilenav;
