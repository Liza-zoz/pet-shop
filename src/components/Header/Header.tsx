import React from "react";
import clsx from "classnames";
import { LogoIcon, IconFacebook, IconInsta, IconX, IconYouTube, ArrowBtn } from "../../img/Icons/Icons";
import styles from "../../styles/header.module.css"


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>

                <div className={styles.header__logo}>
                    <LogoIcon />
                </div>

                <div className={styles.header__info}>
                    <ul className={styles.header__infoList}>
                        <li className={styles.header__infoItem}>
                            {/* remove tag span */}
                            <a href="#" className={styles.header__infoLink}>About us</a>

                        </li>
                        <li className={styles.header__infoItem}>
                            <span>
                                <a href="#" className={styles.header__infoLink}>Services</a>
                            </span>
                        </li>
                        <li className={styles.header__infoItem}>
                            <span>
                                <a href="#" className={styles.header__infoLink}>FAQ</a>
                            </span>
                        </li>
                        <li className={styles.header__infoItem}>
                            <span>
                                <a href="#" className={styles.header__infoLink}>Happy Clients</a>
                            </span>
                        </li>
                        <li className={styles.header__infoItem}>
                            <span>
                                <a href="#" className={styles.header__infoLink}>Contacts</a>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={styles.header__social}>
                    <ul className={styles.header__socialList}>
                        <li className={styles.header__socialItem}>
                            <a href="https://facebook.com/" aria-label="Go to Facebook" className={styles.header__socialLink}><IconFacebook /></a>
                        </li>
                        <li className={styles.header__socialItem}>
                            <a href="https://instagram.com/" aria-label="Go to Instagram" className={styles.header__socialLink}><IconInsta /></a>
                        </li>
                        <li className={styles.header__socialItem}>
                            <a href="https://twitter.com/" aria-label="Go to Twitter" className={styles.header__socialLink}><IconX /></a>
                        </li>
                        <li className={styles.header__socialItem}>
                            <a href="https://youtube.com/" aria-label="Go to YouTube" className={styles.header__socialLink}><IconYouTube /></a>
                        </li>
                    </ul>
                </div>

                <div className={styles.header__content}>
                    <h1 className={styles.header__title}>Your Pet Deserves The Best Care</h1>
                    <p className={styles.header__subtitle}>We offer professional pet care services in New York</p>
                    <div className={styles.header__buttons}>
                        <a href="#" className={clsx(styles.header__button, styles["header__button--primary"])}>Order services <ArrowBtn /></a>
                        <a href="#" className={clsx(styles.header__button, styles["header__button--secondary"])}>Call Us</a>
                    </div>
                </div>
            </nav>

        </header>
    );
};

// export for import in App.tsx
export default Header;