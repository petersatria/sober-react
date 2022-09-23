import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';
import brandLogo from '../../assets/logo-light.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [headerTransparant, setHeaderTransparant] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 90) return setHeaderTransparant(false);
            if (window.scrollY === 0) return setHeaderTransparant(true);
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    // Class
    const navStyle = (navItem) =>
        navItem.isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;

    return (
        <header
            className={
                headerTransparant
                    ? styles.header
                    : `${styles.header} ${styles['header--active']}`
            }
        >
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="home" className={navStyle}>
                            Home
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="shop" className={navStyle}>
                            Shop
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="features" className={navStyle}>
                            Features
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="pages" className={navStyle}>
                            Pages
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="blog" className={navStyle}>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                <img src={brandLogo} alt="Brand Logo" />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={styles['sub-link']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles['sub-link']}>Login</NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink to="/signup" className={styles['sub-link']}>
                            Register
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink
                            className={`${styles['sub-link']} ${styles['sub-link--cart']}`}
                        >
                            <FontAwesomeIcon icon={faCartShopping} />

                            <div className={styles.cart}>0</div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
