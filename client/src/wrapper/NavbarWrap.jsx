import React from 'react';
import Navbar from '../components/Navbar/Navbar';


const NavbarWrap = (Component) => function HOC() {
    return(
        <div>
            <Navbar />
            <Component />
        </div>
        
    )
}

export default NavbarWrap