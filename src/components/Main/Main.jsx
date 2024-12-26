import { useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

function Main({ data, addToCart, searchQuery, setSearchQuery }) {
    const { category, sub } = useParams();
    const [arr, setArr] = useState([]);
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if (data && data[category]) {
            setArr(data[category]);
            setFlag(true)
        }
    }, [data, category])

    return (
        <main className='min-h-[90vh] pt-[150px]'>
            <p className='text-[30px] text-center uppercase pb-5'>{category}'s things</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12 py-5'>
                {
                    flag && (
                        arr[sub]
                            .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((item, i) => {
                                return (<Card searchQuery={searchQuery} setSearchQuery={setSearchQuery} {...item} addToCart={addToCart} category={category} key={i} />)
                            })
                    )
                }
            </div>
        </main>
    );
}

export default Main;
