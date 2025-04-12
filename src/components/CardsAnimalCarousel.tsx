import React from "react";
import styles from "../styles/CardsAnimalCarousel.module.css";

const CardsAnimalCarousel: React.FC = () => {
    return (
        <div className={styles.carousel}>
            <h2 className={styles.title}>🐾 Найпопулярніші товари</h2>
            <div className={styles.items}>
                <div className={styles.item}>Корм для котів</div>
                <div className={styles.item}>Іграшки для собак</div>
                <div className={styles.item}>Переноски</div>
            </div>
        </div>
    );
};

export default CardsAnimalCarousel;