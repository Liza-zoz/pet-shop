import React, { useState, useEffect } from "react";
import clsx from "classnames";
import { Link } from 'react-router-dom';

import { SocialLinks } from "./SocialLinks";

// Logo
import { LogoIcon } from "../components/Icons";

// Style
import styles from "../styles/Header.module.css"

// === Header component ===
const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(() => {
        const stored = localStorage.getItem("menu-open");
        return stored === "true";
    });

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        document.body.classList.toggle("menu-open", isMenuOpen);
        localStorage.setItem("menu-open", isMenuOpen.toString());
    }, [isMenuOpen]);

    const navLinks = [
        { label: "About Us", path: "/about-us" },
        { label: "Services", path: "/services" },
        { label: "FAQ", path: "/faq" },
        { label: "Happy Clients", path: "/happy-clients" },
        { label: "Contacts", path: "/contacts" },
    ];

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

                            {navLinks.map((link) => (
                                <li key={link.path} className={styles.header__infoItem}>

                                    <Link to={link.path}
                                        className={styles.header__infoLink}
                                        aria-label={`Go to page ${link.label}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>

                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* === Social media icons === */}
                    <div className={clsx(styles.header__social, { [styles.active]: isMenuOpen })}>
                        <SocialLinks />
                    </div>
                </div>
            </nav>
        </header>
    );
};

// export for import in App.tsx
export default Header;