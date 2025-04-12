import React from "react";
import clsx from "classnames"; 
import { ArrowBtn, PhoneIcon } from "./Icons"; 
import styles from "../styles/ContentHeader.module.css"; 

const ContentHeader: React.FC = () => {
    return (
        
        <div className={styles.header__content}>

            {/* === Фонова картинка === */}
            <img
                src="/background-header.png"
                className={styles.header__bgrndImg}
                alt="Header background"
            />
            
            {/* === Title and subtitle === */}
            <div className={styles.header__title}>
                <h1 className={styles.header__mainTitle}>
                    Your Pet Deserves the Best Care
                </h1>
                <p className={styles.header__subtitle}>
                    We offer professional pet care services in New York
                </p>
            </div>

            {/* === CTA Buttons === */}
            <div className={styles.header__buttons}>
                <a
                    href="#"
                    className={clsx(
                        styles.header__button,
                        styles["header__button--primary"]
                    )}
                >
                    Order services <ArrowBtn className={styles.header__arrowBtn} />
                </a>
                <a
                    href="#"
                    className={clsx(
                        styles.header__button,
                        styles["header__button--secondary"]
                    )}
                >
                    <PhoneIcon className={styles.header__phoneIcon} />
                    Call Us
                </a>
            </div>
        </div>
    );
};

export default ContentHeader;
