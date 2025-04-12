import React from "react";

import ContentHeader from "../components/ContentHeader";
import CardsAnimalCarousel from "../components/CardsAnimalCarousel"

const HomePage: React.FC = () => {
    return (
        <main>
            <section>
                <ContentHeader />
            </section>
            <section>
                <CardsAnimalCarousel />
            </section>
        </main>
    );
};

export default HomePage;