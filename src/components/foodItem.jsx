import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import Modal from 'react-modal';
import { Category } from '@mui/icons-material';


const FoodItem = ({ foodItem, menuItems, setMenuItems }) => {
    const [foodInput, setFoodInput] = useState[{
        name: foodItem.foodName,
        price: foodItem.foodPrice,
        category: foodItem.foodCategory,
        description: foodItem.foodDescription
    }]
    const [modalIsOpen, setIsOpen] = useState(false);
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
    };
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const deleteFoodItem = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}/food/delete-food/${foodItem._id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const filteredForDelete = menuItems.filter(e => e._id !== foodItem._id)
                setMenuItems(filteredForDelete)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const editFoodItem = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/food/update-food/${foodItem._id}`, {
                name: foodInput.name,
                price: foodInput.price,
                description: foodInput.description,
                category: foodInput.category
            }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            if (res) {
                const updatedFoodItem = res.data
                const updatedMenuItems = menuItems.map(food => {
                    if (food._id === foodItem._id) {
                        return updatedFoodItem
                    }
                    return food
                })
                setMenuItems(updatedMenuItems)
                closeModal()
            }
        } catch (err) {

        }
    }
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className='flex flex-col border-2 border-black rounded-md m-12 p-2 justify-center items-center'>
                    <p>{foodItem.name}</p>
                    <p>{foodItem.price}</p>
                    <p>{foodItem.description}</p>
                    <button onClick={deleteFoodItem} className='border-2 p-2 rounded-md m-2 border-black bg-blue-300'>delete</button>
                    <button className='border-2 p-2 border-black m-2 rounded-md bg-blue-300'>edit</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='flex font-serif flex-col items-center'>
                    <form action="" onSubmit={editFoodItem} className='flex flex-col items-center'>
                        <p className='text-lg p-2'>Edit Food</p>
                        <div className='flex flex-col items-center'>
                            <label>Name</label>
                            <input type="text" onChange={handleFoodInput} value={foodInput.name} name={"foodName"} className='border-2' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label>Price</label>
                            <input type="number" min="0" step="1" value={foodInput.price} className='border-2' onChange={handleFoodInput} name={'foodPrice'} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <label>Description</label>
                            <textarea type="text" className="rounded-md border-2 border-blue-300" name={'foodDescription'} value={foodInput.description} onChange={handleFoodInput} id=""></textarea>
                        </div>
                        <div className='flex flex-col items-center'>
                            <label >Category</label>
                            <select className='border-2 p-2 rounded-md border-blue-300 bg-white text-lg' name="foodCategory" value={foodInput.category}
                                onChange={handleFoodInput}>
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="Appetizer">Appetizer</option>
                                <option value="Main">Main</option>
                                <option value="Dessert">Dessert</option>
                            </select>
                        </div>
                        <button type='submit' className='border-2 border-slate bg-cyan-800 hover:bg-cyan-700 p-2 m-5 text-white rounded-md'>Submit</button>
                    </form>
                    {error && (
                        <p className="text-red-600">
                            Could not edit food item.
                        </p>
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default FoodItem;
