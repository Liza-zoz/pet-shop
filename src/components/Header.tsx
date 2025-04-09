import React, { useState, useEffect } from "react";
import clsx from "classnames";
import { LogoIcon, IconFacebook, IconInsta, IconX, IconYouTube, ArrowBtn, PhoneIcon } from "./Icons";
import styles from "../styles/header.module.css"

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Керування класом для блокування прокручування
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
                <img src="/background-header.png" className={styles.header__bgrndImg} alt="Header background" />

                <div className={clsx(styles.header__top, { [styles.active]: isMenuOpen })}>

                    <button
                        className={clsx(styles.burger, { [styles.active]: isMenuOpen })}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div className={styles.header__logo}>
                        <a href="#" className={styles.header__logoIcon} aria-label="Logo">
                            <LogoIcon />
                        </a>
                    </div>

                    {/* info and social container */}
                    <div className={clsx(styles.header__menu, { [styles.active]: isMenuOpen })}>
                        {/* info */}
                        <div className={clsx(styles.header__info, { [styles.active]: isMenuOpen })}>
                            <ul className={styles.header__infoList}>
                                <li className={styles.header__infoItem}>
                                    <a href="#" aria-label="Go to page About us" className={styles.header__infoLink}>About us</a>
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

                        {/* social */}
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
                </div>

                <div className={styles.header__content}>
                    <div className={styles.header__title}>
                        <h1 className={styles.header__mainTitle}>Your Pet Deserves <br /> the Best Care</h1>
                        <p className={styles.header__subtitle}>We offer professional pet care services in New York</p>
                    </div>
                    <div className={styles.header__buttons}>
                        <a href="#" className={clsx(styles.header__button, styles["header__button--primary"])}>Order services <ArrowBtn className={styles.header__arrowBtn} /></a>
                        <a href="#" className={clsx(styles.header__button, styles["header__button--secondary"])}><PhoneIcon className={styles.header__phoneIcon} />Call Us</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

// export for import in App.tsx
export default Header;