import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
            <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "")}>À propos</NavLink>
        </div>
    );
};

export default Navigation;