import React from 'react'

function Footer() {
    return (
        <footer className='h-[23vh] bg-[rgb(0,0,0)]'>
            <ul className='flex pt-[80px] text-[#fff] justify-center gap-4 text-[15px]'>
                <li className='hover:text-[#aaa] cursor-pointer'>Search</li>
                <li className='hover:text-[#aaa] cursor-pointer'>FAQs</li>
                <li className='hover:text-[#aaa] cursor-pointer'>Privacy Policy</li>
                <li className='hover:text-[#aaa] cursor-pointer'>Terms & Conditions</li>
            </ul>
            <p className='pt-[50px] text-[#aaa] cursor-pointer hover:text-[#fff] text-center'>© SPACEX STORE</p>
        </footer>
    )
}

export default Footer