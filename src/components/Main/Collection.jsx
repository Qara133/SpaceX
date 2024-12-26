import React from 'react'
import Card from './Card';

function Collection({ data, addToCart }) {

    return (
        <main className='h-auto pt-[150px]'>

            <p className='text-[30px] text-center uppercase pb-5'>x collection</p>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-12 py-5'>
                {data && data.collection ? (
                    data.collection.map((item, i) => (
                        <Card {...item} addToCart={addToCart} key={i} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </main>
    );
}

export default Collection