import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductList.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = (props) => {
    // State
    const [cartActive, setCartActive] = useState(false);

    // Handler
    const clickHandler = () => {
        setCartActive((prevState) => !prevState);
    };

    // Props
    const price = props.price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return (
        <div className={styles.container}>
            <Link className={styles.link}>
                <img src={props.img[0]} alt="Product" className={styles.img} />
                <img
                    src={props.img[1]}
                    alt="Product"
                    className={`${styles.img} ${styles['img--2']}`}
                />

                <button onClick={clickHandler} className={styles.btn}>
                    <FontAwesomeIcon icon={cartActive ? faCheck : faCartShopping} />
                </button>
            </Link>

            <div className={styles.text}>
                <p className={styles.name}>{props.name}</p>

                <p className={styles.price}>{price}</p>
            </div>

            <div className={styles.tags}>
                {props.hot && <div className={styles.hot}>Hot</div>}
                {/* <div className={styles.new}>New</div> */}
                {/* <div className={styles.discount}>20%</div> */}
            </div>
        </div>
    );
};

export default ProductList;
