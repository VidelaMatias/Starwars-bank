import React, { FC, useEffect, useState } from 'react';
import styles from './carousel.module.scss'

interface props {
    planets: any[]
}

const Carousel: FC<props> = ({ planets }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState(planets?.slice(0,5));

    useEffect(() => {
        if (planets) {
            setItems(planets.slice(0,5))
        }

    }, [planets])

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            <button onClick={goToPrevious} aria-label="Go to previous slide" className={`${styles.carouselButton} ${styles.prevButton}`}>
                ❮
            </button>
            {
                items ?
                    <div className={styles.carouselSlide}>
                        <h2>{items[currentIndex].name}</h2>
                        <p><b>Total Residents: </b>{items[currentIndex].residents.length} </p>
                        <p><b>Total Films: </b>{items[currentIndex].films.length} </p>
                        <p><b>Total Transactions: </b>{items[currentIndex].transactions.length} </p>
                    </div>
                    :
                    <span>carga</span>
            }

            <button onClick={goToNext}  aria-label="Go to next slide" className={`${styles.carouselButton} ${styles.nextButton}`}>
                ❯
            </button>
        </div>
    );
};

export default Carousel;