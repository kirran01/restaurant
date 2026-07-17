import React, { useState } from 'react';

const FoodItem = () => {
    const foodInput = useState[{
        foodPrice: '',
        foodName:''
    }]
    return (
        <div className='flex flex-col border-2'>
            <p>Name</p>
            <p>Cost</p>
        </div>
    );
}

export default FoodItem;
