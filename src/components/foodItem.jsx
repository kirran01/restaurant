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
                <p className='text-lg'>Main</p>
                <div className='flex flex-col border-2 border-black rounded-md m-12 p-2'>
                    <p>{foodItem.name}</p>
                    <p>{foodItem.price}</p>
                    <p>{foodItem.description}</p>
                </div>
            </div>
            {/* <div className='flex flex-col'>
                <p className='text-lg'>Dessert</p>
                <div className='flex flex-col border-2 border-black rounded-md m-12 p-2'>
                    <p>{foodItem.foodName}</p>
                    <p>{foodItem.foodPrice}</p>
                    <p>{foodItem.foodDescription}</p>
                </div>
            </div> */}
            {/* <div className='flex flex-col'>
                <p className='text-lg'>Appetizer</p>
                <div className='flex flex-col border-2 border-black rounded-md m-12 p-2'>
                    <p>Nachos</p>
                    <p>$5</p>
                    <p>fried chips coupled with your choice of salsa or guac. Crunchy time.</p>
                </div>

            </div> */}

            {/* <p>{foodItem.foodName}</p>
            <p>{foodItem.foodPrice}</p>
            <p>{foodItem.foodDescription}</p> */}
        </div>
    );
}

export default FoodItem;
