import React from "react";
import styles from "../styles/Footer.module.css";

const SubscribeForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        console.log("Email submitted:", email);
    };

    return (
        <form className={styles.footer__form} onSubmit={handleSubmit}>
            <label htmlFor="footerEmail" className={styles.footer__label}>
                Leave your email:
            </label>
            
            <input
                type="email"
                id="footerEmail"
                name="email"
                required
                className={styles.footer__input}
                placeholder="Email*"
            />
            <button type="submit" className={styles.footer__button}>
                <p className={styles.footer__buttonText}>Subscribe</p>
            </button>
        </form>
    );
};

export default SubscribeForm;
