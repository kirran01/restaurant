import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Modal from 'react-modal';
import Mobilenav from './mobilenav';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
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
        <nav className='fixed w-full z-30'>
            <ul className='flex bg-black text-white p-4 items-center justify-between'>
                <div className='flex items-center'>
                    <Link className='flex items-center mx-1' to={'/'}>
                        <HomeIcon />
                    </Link>
                    <li className='flex lg:collapse md:collapse mx-1' onClick={openModal} >
                        <MenuIcon />
                    </li>
                </div>
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
