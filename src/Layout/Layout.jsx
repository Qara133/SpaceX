import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Layout({ searchQuery, setSearchQuery }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
