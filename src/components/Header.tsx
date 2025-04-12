import React, { useState, useEffect } from "react";
import clsx from "classnames";
import { Link } from 'react-router-dom';

// Logo
import { LogoIcon, IconFacebook, IconInsta, IconX, IconYouTube } from "./Icons";

// Style
import styles from "../styles/Header.module.css"

// === Header component ===
const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>


                {/* === Top section: logo + burger + menu === */}
                <div className={clsx(styles.header__top, { [styles.active]: isMenuOpen })}>

                    {/* === Logo and Burger wrapper === */}
                    <div className={clsx(styles.header__toggleMenu, { [styles.active]: isMenuOpen })}>

                        {/* === Logo === */}
                        <div className={styles.header__logo}>
                            <Link to="/" className={styles.header__logoIcon} aria-label="Logo">
                                <LogoIcon />
                            </Link>
                        </div>

                        {/* === Burger button === */}
                        <button
                            className={clsx(styles.burger, { [styles.active]: isMenuOpen })}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>

                    {/* === Info nav links === */}
                    <div className={clsx(styles.header__info, { [styles.active]: isMenuOpen })}>
                        <ul className={styles.header__infoList}>
                            <li className={styles.header__infoItem}>
                                <Link to="/about-us" className={styles.header__infoLink} aria-label="Go to page About us">
                                    About us
                                </Link>
                            </li>
                            <li className={styles.header__infoItem}>
                                <a href="#" aria-label="Go to page Services" className={styles.header__infoLink}>Services</a>
                            </li>
                            <li className={styles.header__infoItem}>
                                <a href="#" aria-label="Go to page FAQ" className={styles.header__infoLink}>FAQ</a>
                            </li>
                            <li className={styles.header__infoItem}>
                                <a href="#" aria-label="Go to page Happy Clients" className={styles.header__infoLink}>Happy Clients</a>
                            </li>
                            <li className={styles.header__infoItem}>
                                <a href="#" aria-label="Go to page Contacts" className={styles.header__infoLink}>Contacts</a>
                            </li>
                        </ul>
                    </div>

                    {/* === Social media icons === */}
                    <div className={clsx(styles.header__social, { [styles.active]: isMenuOpen })}>
                        <ul className={styles.header__socialList}>
                            <li className={styles.header__socialItem}>
                                <a href="https://facebook.com/" aria-label="Go to Facebook" className={styles.header__socialLink}><IconFacebook className={styles.header__icon} /></a>
                            </li>
                            <li className={styles.header__socialItem}>
                                <a href="https://instagram.com/" aria-label="Go to Instagram" className={styles.header__socialLink}><IconInsta className={styles.header__icon} /></a>
                            </li>
                            <li className={styles.header__socialItem}>
                                <a href="https://twitter.com/" aria-label="Go to Twitter" className={styles.header__socialLink}><IconX className={styles.header__icon} /></a>
                            </li>
                            <li className={styles.header__socialItem}>
                                <a href="https://youtube.com/" aria-label="Go to YouTube" className={styles.header__socialLink}><IconYouTube className={styles.header__icon} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// export for import in App.tsx
export default Header;