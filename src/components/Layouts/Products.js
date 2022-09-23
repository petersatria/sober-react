import ProductList from '../ProductList/ProductList';

import styles from './Products.module.css';

import dumData from '../../assets/dummy_data.json';
import { useState } from 'react';

const ProductsBestSeller = () => {
    // State
    const [showAllProducts, setShowAllProducts] = useState(false);

    // Handler
    const clickHandler = () => {
        setShowAllProducts((prevState) => !prevState);
    };

    // Component
    const allProduct = dumData.data.map((product) => (
        <ProductList
            key={product._id}
            img={product.images}
            name={product.name}
            price={product.price}
            hot={product.recommendation}
        />
    ));

    const topProducts = dumData.data
        .slice(0, 5)
        .map((product) => (
            <ProductList
                key={product._id}
                img={product.images}
                name={product.name}
                price={product.price}
                hot={product.recommendation}
            />
        ));

    return (
        <>
            <div className={styles['heading-box']}>
                <h2 className={styles.heading}>
                    {showAllProducts ? 'All Products' : 'Best of This Week'}
                </h2>
            </div>

            <section className={styles.container}>
                <div className={styles.list}>
                    {showAllProducts ? allProduct : topProducts}
                </div>

                <button onClick={clickHandler} className={styles.btn}>
                    {showAllProducts ? 'Best of This Week' : 'All Products'}
                </button>
            </section>
        </>
    );
};

export default ProductsBestSeller;
