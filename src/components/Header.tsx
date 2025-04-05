import React from "react";
import clsx from "classnames";
import { LogoIcon, IconFacebook, IconInsta, IconX, IconYouTube, ArrowBtn, PhoneIcon } from "./Icons";
import styles from "../styles/header.module.css"


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>

                <div className={styles.header__top}>
                    <div className={styles.header__logo}>
                        <a href="#" className={styles.header__logoIcon} aria-label="Logo">
                            <LogoIcon />
                        </a>
                    </div>
                    <div className={styles.header__info}>
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

                    <div className={styles.header__social}>
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