import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const sliderData = [
    { key: +Math.random(), heading: 'Man Collection', linkMsg: 'Shop Now' },
    { key: +Math.random(), heading: 'Woman Collection', linkMsg: 'Shop Now' },
];

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setSlideIndex((prevState) => {
                    let newIndex = prevState + 1;
                    if (newIndex === sliderData.length) return 0;
                    return newIndex;
                }),
            15000
        );

        return () => clearInterval(interval);
    }, [slideIndex]);

    const moveSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <section className={styles.slider}>
            {sliderData.map((slide, i) => (
                <div
                    key={slide.key}
                    className={`${`${styles.slide} ${styles[`slide-${i}`]}`} ${
                        slideIndex === i ? `${styles['slide-active']}` : ''
                    }`}
                >
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{slide.heading}</h2>

                        <Link className={styles.link}>{slide.linkMsg}</Link>
                    </div>
                </div>
            ))}

            <div className={styles.dots}>
                {sliderData.map((slide, i) => (
                    <button
                        key={slide.key}
                        onClick={() => moveSlide(i)}
                        className={`${styles.dot} ${
                            slideIndex === i ? `${styles['dot-active']}` : ''
                        }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Hero;
