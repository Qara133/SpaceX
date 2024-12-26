import React, { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header({ searchQuery, setSearchQuery }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    

    const handleCategoryClick = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    useEffect(()=>{

    }, [searchQuery])

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full p-6 border border-x-0 bg-[#000] text-[#fff]">
            {/* DESKTOP VERSION */}
            <div className="smm:hidden xl:flex justify-between h-16 mx-auto">
                <div className="flex ml-5">
                    <Link to={"/"} aria-label="Back to homepage" className="flex items-center p-2">
                        <img src="https://shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073" alt="Logo" />
                    </Link>
                    <ul className="items-stretch hidden pt-5 space-x-3 lg:flex relative">
                        {['men', 'women', 'kids', 'accessories'].map((category) => (
                            <li key={category} className="relative group">
                                <Link to={"#"} className="flex items-center px-4 -mb-1">
                                    {category.toUpperCase()}
                                </Link>
                                <ul className="absolute border left-0 top-full w-48 bg-[#000] text-[#fff] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 mt-6">
                                    {category === 'men' && (
                                        <>
                                            <li className="text-[14px] px-5 py-3 hover:text-[#939393]">
                                                <Link to={`${category}/shirts`}>SHIRTS</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/outerwear`}>OUTERWEAR</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/view-all`}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'women' && (
                                        <>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/shirts`}>SHIRTS</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/outerwear`}>OUTERWEAR</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/view-all`}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'kids' && (
                                        <>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/shirts`}>SHIRTS</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/outerwear`}>OUTERWEAR</Link>
                                            </li>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/view-all`}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'accessories' && (
                                        <>
                                            <li className="px-5 py-3 text-[14px] hover:text-[#939393]">
                                                <Link to={`${category}/view-all`}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 gap-9 mr-6 lg:flex">
                    <Link className='hover:text-[#fff] text-[#939393]' to={"/account"}>ACCOUNT</Link>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='hover:text-[#fff] text-[#939393]'>
                        SEARCH
                    </button>
                    <Link to={"/cart"}>
                        <BsBag className='text-[23px] ' />
                    </Link>
                </div>
            </div>

            {/* MOBILE VERSION */}
            <div className='smm:flex xl:hidden justify-between h-16 mx-auto bg-[#000]'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-4 text-[#fff]">
                    <FiMenu className='text-[30px]' />
                </button>
                <Link to={"/"}>
                    <img className='pt-2' src="https://shop.spacex.com/cdn/shop/files/SpaceX_logo_white_6eaf0441-42af-4396-974e-d6dc2f8ff45c_160x.png?v=1614778073" alt="Logo" />
                </Link>
                <div className='flex gap-5'>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='text-[#fff]'>
                        <IoSearch className='text-[27px]' />
                    </button>
                    <Link to={"/cart"}>
                        <BsBag className='text-[23px] mt-5' />
                    </Link>
                </div>
            </div>

            {isSearchOpen && (
                <div className="fixed top-[114px] left-0 w-full smm:h-[50px] sm:h-[80px] bg-[#f1f1f1] z-40 flex items-center px-4 border-b border-[#ddd]">
                    <IoSearch className="text-[30px] ml-6 text-[#000] mr-4" />
                    <input
                        type="text"
                        placeholder="SEARCH..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-8 border-none px-4 bg-[#f1f1f1] text-[#000] text-[23px] uppercase focus:outline-none"
                    />
                    <button onClick={() => setIsSearchOpen(false)} className="ml-4">
                        <IoMdClose className="text-[30px] mr-6 text-[#000]" />
                    </button>
                </div>
            )}


            <div className={`fixed top-0 left-0 smm:w-3/4 sm:w-2/4 h-full text-[#000] bg-[#f1f1f1] z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={() => setIsMenuOpen(false)} className="p-4">
                    <span className="text-[30px]"><IoMdClose className='m-2' /></span>
                </button>
                <ul className="p-6">
                    {['men', 'women', 'kids', 'accessories'].map((category) => (
                        <li key={category} className="py-4 border-b">
                            <button
                                onClick={() => handleCategoryClick(category)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                {category.toUpperCase()}
                                <span
                                    className={`text-[27px] text-[#939393] transform transition-transform duration-300 ${openCategory === category ? 'rotate-90' : ''}`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-max-height duration-700 ease-in-out ${openCategory === category ? 'max-h-[500px]' : 'max-h-0'
                                    }`}
                            >
                                <ul className="pl-4 mt-4 space-y-6 text-[14px]">
                                    {category === 'men' && (
                                        <>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/shirts`} onClick={handleMenuClose}>SHIRTS</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/outerwear`} onClick={handleMenuClose}>OUTERWEAR</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/view-all`} onClick={handleMenuClose}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'women' && (
                                        <>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/shirts`} onClick={handleMenuClose}>SHIRTS</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/outerwear`} onClick={handleMenuClose}>OUTERWEAR</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/view-all`} onClick={handleMenuClose}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'kids' && (
                                        <>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/shirts`} onClick={handleMenuClose}>SHIRTS</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/outerwear`} onClick={handleMenuClose}>OUTERWEAR</Link>
                                            </li>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/view-all`} onClick={handleMenuClose}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                    {category === 'accessories' && (
                                        <>
                                            <li className="text-[#000]">
                                                <Link to={`${category}/view-all`} onClick={handleMenuClose}>VIEW ALL</Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </li>
                    ))}
                    <li className="py-4 text-[#939393]">
                        <Link to={"/account"} onClick={handleMenuClose}>ACCOUNT</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
