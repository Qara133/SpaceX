import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function FirstMain({ data, addToCart }) { 

    return (
        <main className='h-auto'>
            <Link to={`/collections`}>
            <p className='text-[30px] text-center uppercase pt-11 pb-7'>trending</p>
            </Link>

            <p className='text-[30px] text-center uppercase pt-11 pb-7'>trending</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-12 py-5'>
                {data && data.trending ? ( 
                    data.trending.map((item, i) => (
                        <Card {...item} key={i} addToCart={addToCart} /> 
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
}

export default FirstMain;
