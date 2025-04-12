import React from "react";
import styles from "../styles/socialIcon.module.css";

type Props = {
    href: string;
    label: string;
    children: React.ReactElement;
};

const SocialIcon: React.FC<Props> = ({ href, label, children }) => {
    return (
        <li className={styles.socialItem}>
            <a
                href={href}
                aria-label={`Go to ${label}`}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {React.cloneElement(children, { className: styles.icon })}
            </a>
        </li>
    );
};

export default SocialIcon;