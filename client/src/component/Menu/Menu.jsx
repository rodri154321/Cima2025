import React, { useState } from 'react';
import styles from './Menu.module.css';
import logo from '../../assets/CimaNews_LogoHeader.gif';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuActive(prevState => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <div onClick={handleToggle} className={`${styles.menuBtn} ${isActive ? styles.open : ''}`}>
            {isActive ? (
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="6" y1="6" x2="26" y2="26" stroke="white" strokeWidth="3" />
                <line x1="26" y1="6" x2="6" y2="26" stroke="white" strokeWidth="3" />
              </svg>
            ) : (
              <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="28" height="3" fill="white" />
                <rect x="2" y="10" width="28" height="3" fill="white" />
                <rect x="2" y="16" width="14" height="3" fill="white" />
              </svg>
            )}
          </div>

          {isActive && <div onClick={handleToggle} className={styles.close}></div>}

          <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
            <ul className={styles.menuList}>
              <li><a href="#">Inicio</a></li>
              <li>
                <a href="#" onClick={handleSubMenuToggle}>Días</a>
                <ul
                  className={`${styles.subMenu} ${isSubMenuActive ? styles.activeSubMenu : ''}`}
                  style={{
                    opacity: isSubMenuActive ? 1 : 0,
                    transform: isSubMenuActive ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </nav>
    </>
  );
};

export default Menu;
