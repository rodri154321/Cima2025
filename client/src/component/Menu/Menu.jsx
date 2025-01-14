import React from 'react';
import style from './Menu.module.css';
import logo from '../../assets/CimaNews_LogoHeader.gif'

const Menu = () => {
    return (
        <nav class={style.navbar}>
            <div className={style.container}>
                <div class={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <svg className={style.menuButton} width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="28" height="3" fill="white" />
                <rect x="2" y="10" width="28" height="3" fill="white" />
                <rect x="2" y="16" width="14" height="3" fill="white" />
            </svg>
        </nav>
    );
};

export default Menu;
