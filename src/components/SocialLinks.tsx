import React from "react";
import { socialLinks } from "../data/socialLinksData";
import SocialIcon from "./SocialIcon";
import styles from "../styles/Header.module.css";


export const SocialLinks: React.FC = () => {
    return (
        <ul className={styles.header__socialList}>
            {socialLinks.map((item) => (
                <SocialIcon key={item.label} href={item.href} label={item.label}>
                    {item.icon}
                </SocialIcon>
            ))}
            </ul>
    );
};


