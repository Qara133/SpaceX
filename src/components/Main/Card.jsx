import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ id, name, image, image1, price, addToCart, category }) {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');

    const handleAddClick = () => {
        addToCart({ id, name, image, price, size: selectedSize });
    };

    const showSizeSelector = category === 'men' || category === 'women' || category === 'kids';

    return (
        <div
            className='text-center w-full'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={"#"}>
                <img
                    className='w-full h-auto max-w-full transition-opacity duration-1000'
                    src={isHovered ? image1 : image}
                    alt={name}
                />
            </Link>
            <p className='mt-2'>{name}</p>
            <p>${price}</p>

            {showSizeSelector && (
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className='mt-2 mb-1 border rounded-md'
                >
                    <option value=''>Size</option>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                </select>
            )}
            <br />
            <button
                onClick={handleAddClick}
                className='bg-[#17ce17] w-[80px] h-[30px] rounded-md mt-2 mb-2'
                disabled={showSizeSelector && !selectedSize}
            >
                Add
            </button>
        </div>
    );
}

export default Card;
