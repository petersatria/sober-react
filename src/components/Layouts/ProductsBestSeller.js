import ProductList from '../ProductList.js/ProductList';

import styles from './ProductsBestSeller.module.css';

import dumData from '../../assets/dummy_data.json';

const ProductsBestSeller = () => {
    return (
        <section className={styles.container}>
            <div className={styles.list}>
                {dumData.data.map((product) => (
                    <ProductList
                        key={product._id}
                        img={product.images}
                        name={product.name}
                        price={product.price}
                        hot={product.recommendation}
                    />
                ))}
            </div>

            <button className={styles.btn}>Load More</button>
        </section>
    );
};

export default ProductsBestSeller;
