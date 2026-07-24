import React, { useState } from 'react';

const FoodItem = ({ foodItem, menuItems, setMenuItems }) => {
    const foodInput = useState[{
        foodName: '',
        foodPrice: 0,
        foodCategory: '',
        foodDescription: ''
    }]
    const deleteFoodItem = async (e) => {
        try {

        } catch (err) {

        }
    }
    const editFoodItem = async (e) => {
        try {

        } catch (err) {

        }
    }
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className='flex flex-col border-2 border-black rounded-md m-12 p-2'>
                    <p>{foodItem.name}</p>
                    <p>{foodItem.price}</p>
                    <p>{foodItem.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
