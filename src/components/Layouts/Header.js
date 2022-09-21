import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';
import brandLogo from '../../assets/logo-light.svg';

const Header = () => {
    const navStyle = (navItem) =>
        navItem.isActive ? `${styles.link} ${styles.actice}` : `${styles.link}`;
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={navStyle}>Home</NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link}>Shop</NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link}>Features</NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link}>Pages</NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link}>Blog</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                <img src={brandLogo} alt="Brand Logo" />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.btn}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </li>

                    <li className={styles.item}>
                        <button className={styles.btn}>Login</button>
                    </li>

                    <li className={styles.item}>
                        <button className={styles.btn}>Register</button>
                    </li>

                    <li className={styles.item}>
                        <button className={`${styles.btn} ${styles['btn-cart']}`}>
                            <FontAwesomeIcon icon={faCartShopping} />

                            <div className={styles.cart}>0</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
