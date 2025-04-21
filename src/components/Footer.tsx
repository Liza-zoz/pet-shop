import React from "react";
import { Link } from 'react-router-dom';

import FooterLinkGroup from "./FooterLinkGroup";
import { footerLinks } from "../data/footerLinksData";

import SubscribeForm from "./SubscribeForm";

// Icon
import { LogoIcon } from "../components/Icons";
import { SocialLinks } from "./SocialLinks";
import { LineDivider } from "./Icons";

// Styyle
import styles from "../styles/Footer.module.css"

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>

            {/* === MAIN CONTAINER === */}
            <div className={styles.footer__container}>

                {/* === COMPANY BLOCK (Logo + Description + Socials) === */}
                <div className={styles.footer__company}>
                    {/* Logo */}
                    <div className={styles.footer__logo}>
                        <Link to="/" className={styles.footer__logoIcon} aria-label="Logo">
                            <LogoIcon />
                        </Link>
                    </div>
                    {/* Company description */}
                    <p className={styles.footer__description}>
                        We care about every pet of our clients and provide all kinds of pet care services in New York.
                    </p>
                    {/* Social media icons */}
                    <div className={styles.footer__social}>
                        <SocialLinks />
                    </div>
                </div>

                {/* === NAVIGATION BLOCKS (Mapped footer link groups) === */}
                {footerLinks.map((group) => (
                    <FooterLinkGroup
                        key={group.title}
                        title={group.title}
                        links={group.links}
                    />
                ))}

                {/* === SUBSCRIBE BLOCK (Title + Divider + Form) === */}
                <div className={styles.footer__column}>
                    {/* Block title */}
                    <p className={styles.footer__title}>Subscribe</p>
                    {/* Decorative divider */}
                    <div className={styles.footer__divider}>
                        <LineDivider className={styles.footer__line} />
                    </div>
                    {/* Subscribe form */}
                    <div className={styles.footer__subscribe}>
                        <SubscribeForm />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;