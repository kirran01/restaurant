import React, { useState } from 'react';

const FoodItem = ({ foodItem, menuItems, setMenuItems }) => {
    const foodInput = useState[{
        foodName: '',
        foodPrice: 0,
        foodCategory: ''
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
        <div className='flex flex-col border-2 border-black'>
            <p>{foodItem.foodName}</p>
            <p>{foodItem.foodPrice}</p>
            <p>{foodItem.foodDescription}</p>
        </div>
    );
}

export default FoodItem;
