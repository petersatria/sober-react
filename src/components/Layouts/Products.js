import { useEffect, useState } from 'react';
import useFetch from '../../hooks/use-fetch';

import ProductList from '../ProductList/ProductList';

import styles from './Products.module.css';

import hostUrl from '../../url';

import dumData from '../../assets/dummy_data.json';

const ProductsBestSeller = () => {
    // State
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [products, setProducts] = useState([]);
    const { sendRequest } = useFetch(true);

    // Side Effect
    useEffect(() => {
        const dataHandler = (data) => {
            console.log(data.data);
            setProducts(data.data);
        };

        const reqConfig = {
            url: `${hostUrl}api/products`,
            method: 'GET',
        };

        sendRequest(reqConfig, dataHandler);
    }, [sendRequest]);

    // Handler
    const clickHandler = () => {
        setShowAllProducts((prevState) => !prevState);
    };

    // Component
    const allProduct = products.map((product) => (
        <ProductList
            key={product._id}
            img={product.images}
            name={product.name}
            price={product.price}
            hot={product.recommendation}
            product={product}
        />
    ));

    const topProducts = products
        .slice(0, 5)
        .map((product) => (
            <ProductList
                key={product._id}
                img={product.images}
                name={product.name}
                price={product.price}
                hot={product.recommendation}
                product={product}
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
