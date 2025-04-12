import React from "react";
// import clsx from "classnames";
// import { Link } from 'react-router-dom';

// import { SocialLinks } from "../data/SocialLinks";
// 
// Logo
import { LogoIcon } from "../components/Icons";

// import styles from "../styles/Footer.module.css"

const Footer: React.FC = () => {

    return (
        <footer>
            <div>
                <div>
                    <LogoIcon />
                    <p>We care about every pet of our clients and provide all kinds of pet care services in New York.</p>

                    {/* <SocialLinks
                        listClass={styles.footer__socialList}
                        itemClass={styles.footer__socialItem}
                        linkClass={styles.footer__socialLink}
                        iconClass={styles.footer__icon}
                    /> */}

                </div>
            </div>
        </footer>
    );
};

export default Footer;