import React, { useState } from 'react';
// import react simple animate for animation styles
import { Animate } from 'react-simple-animate';
// svg 
import hamburgerMenu from '../svg/hamburger-menu-svgrepo-com.svg'
import closeMenu from '../svg/close-svgrepo-com.svg'
// styles
import styles from './header.module.css'
// image
import Logo from '../Images/logo.png'

const Header = () => {
    const [menu, setMenu] = useState(false)

    const showMenu =() => {
        setMenu(true)
    }

    const hideMenu = () => {
        setMenu(false)
    }

    return (
        <div className={styles.container}>
            <div>
                {
                    menu ? <img onClick={hideMenu} className={styles.closeMenu} src={closeMenu} alt='closemenu' /> : 
                    <img onClick={showMenu} className={styles.hamburgerMenu} src={hamburgerMenu} alt='hamburgermenu'/> 
                }
            </div>
            <div>
                {
                    menu &&
                    <Animate play duration={0.02} start={{ opacity: 0 }} end={{ opacity: 1 }}>
                    <div className={styles.dropMenu}>
                        <p className={styles.homeButton}>HOME</p>
                        <div className={styles.justForLine}></div> 
                        <ul className={styles.listMenu}>
                            <li>MENU</li>
                            <li>CONTACT US</li>
                            <li>SPECIAL SUGGEST</li>
                        </ul>
                    </div>
                    </Animate>
                }
                <div>
                    <img className={styles.logo} src={Logo} alt='logo'/>
                </div>
            </div>
        </div>
    );
}

export default Header;