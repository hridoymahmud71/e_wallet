import React from 'react'
import AdminRouting from '../routing/AdminRouting';
import CommonRouting from '../routing/CommonRouting';
import UserRouting from '../routing/UserRouting';


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">            
            <CommonRouting/>
        </div>
    )
}

export default Layout;

