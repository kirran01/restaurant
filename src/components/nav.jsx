import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Modal from 'react-modal';
import Mobilenav from './mobilenav';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);
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
    return (
        <nav className='fixed w-full z-30 font-serif'>
            <ul className='flex bg-black text-white p-4 items-center justify-between'>
                <div className='flex items-center'>
                    <Link className='flex items-center mx-1' to={'/'}>
                        <HomeIcon />
                    </Link>
                    <li className='flex lg:collapse md:collapse mx-1' onClick={openModal} >
                        <MenuIcon />
                    </li>
                </div>
                <li onClick={logOut} className='text-white cursor-pointer'>
                    Log Out
                </li>
                <div className='hidden lg:flex md:flex'>
                    <Link className='mx-2' to={'/menu'}>
                        Menu
                    </Link>
                    <Link className='mx-2' to={'/events'}>
                        Events
                    </Link>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >
                        <Mobilenav closeModal={closeModal} />
                    </Modal>
                </div>
            </ul>
        </nav>

    );
}

export default Nav;
