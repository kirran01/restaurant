import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Mobilenav = ({closeModal}) => {
    return (
        <div className='flex flex-col text-center p-5'>
            <ul>
                <div className='flex flex-col'>
                    <Link className='m-5' to={'/menu'} onClick={closeModal}>Menu</Link>
                    <Link className='m-5' to={'/events'} onClick={closeModal}>Events</Link>
                </div>
            </ul>
        </div>
    );
}

export default Mobilenav;
