import Foot from '../components/footer'
import Modal from 'react-modal';
import foodItem from '../components/foodItem'
import { useState } from 'react';


const Menu = () => {
    const [menuItems, setMenuItems] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false)
    const [foodInput, setFoodInput] = useState({
        foodName: '',
        foodPrice: '',
        foodCategory: ''
    })
    const handleFoodInput = (e) => {
        setFoodInput({ ...foodInput, [e.target.name]: e.target.value })
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
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
        setError(false)
        setFoodInput({
            foodName: '',
            foodPrice: ''
        })
    }
    return (
        <div className="pt-14 font-serif bg-lime-100">
            <div className="bg-amber-200 p-4 py-10 flex flex-col items-center">
                <p className="text-lg font-bold lg:text-3xl md:text-3xl text-center my-4">Menu</p>
                <p className="text-center text-sm lg:text-sm my-2">explore our creations...</p>
                <button className="text-center bg-black hover:bg-slate-800 text-white p-2 m-2 mt-4 rounded-lg" onClick={openModal}>New Item</button>
            </div>
                <div className="flex flex-col text-center">
                    
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='flex font-serif flex-col items-center'>
                    <form action="" className='flex flex-col items-center'>
                        <div className='flex flex-col items-center'>
                            <label>Food name</label>
                            <input type="text"  onChange={handleFoodInput} value={foodInput.foodName} name={"foodName"} className='border-2' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label>Food price</label>
                            <input type="text" value={foodInput.foodPrice} className='border-2' onChange={handleFoodInput} name={'foodPrice'} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label >Category</label>
                            <input type="text" value={foodInput.foodCategory} className='border-2' onChange={handleFoodInput} name={'foodCategory'} />
                        </div>
                        <button className='border-2 p-2 m-2'>Submit</button>
                    </form>
                </div>
            </Modal>
            <div className='pt-4'>
                <Foot />
            </div>
        </div>
    );
}

export default Menu;
