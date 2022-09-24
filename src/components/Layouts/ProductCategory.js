import { NavLink } from 'react-router-dom';
import styles from './ProductCategoty.module.css';

const ProductCategory = () => {
    const navActiveStyle = (navItem) =>
        navItem.isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;

    return (
        <section className={styles.container}>
            <NavLink to="best-sellers" className={navActiveStyle}>
                Best Sellers
            </NavLink>

            <NavLink to="new-products" className={navActiveStyle}>
                New Products
            </NavLink>

            <NavLink to="sales-products" className={navActiveStyle}>
                Sales Products
            </NavLink>
        </section>
    );
};

export default ProductCategory;
