import { Fragment, useEffect, useState } from 'react';
import useFetch from '../../hooks/use-fetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

import styles from './Dashboard.module.css';
import hostUrl from '../../url';

const Dashboard = () => {
    const [data, setData] = useState([]);

    const { sendRequest } = useFetch(true);

    useEffect(() => {
        const reqConfig = {
            url: `${hostUrl}api/product`,
            method: 'GET',
        };

        const dataHandler = (newData) => {
            setData(newData.result);
        };

        sendRequest(reqConfig, dataHandler);
    }, [sendRequest]);

    const deleteHandler = function () {
        sendRequest({
            url: `${hostUrl}api/delete-product/${this}`,
            method: 'DELETE',
        });

        window.location.href = `${window.location.protocol}//${window.location.host}/admin`;
    };

    const rowsData = data.map((data) => (
        <Fragment key={data._id}>
            <p className={styles.col}>{data._id}</p>

            <p className={styles.col}>{data.name}</p>

            <p className={styles.col}>{data.detail}</p>

            <p className={styles.col}>{data.thumbnail}</p>

            <p className={styles.col}>
                {data?.price?.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                })}
            </p>

            <p className={styles.col}>{data.images?.join('\n').trim()}</p>

            <Link to={`edit/${data._id}`} className={`${styles.col} ${styles.btn}`}>
                <FontAwesomeIcon icon={faPencil} />
            </Link>

            <button
                onClick={deleteHandler.bind(data._id)}
                className={`${styles.col} ${styles.btn}`}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </Fragment>
    ));

    return (
        <section className={styles.container}>
            <Link to="add-product" className={styles.add}>
                Add Product+
            </Link>

            <div className={styles.table}>
                <p className={styles.head}>Id</p>
                <p className={styles.head}>Name</p>
                <p className={styles.head}>Detail</p>
                <p className={styles.head}>Thumbnail</p>
                <p className={styles.head}>Price</p>
                <p className={styles.head}>Images</p>
                <p className={`${styles.head} ${styles.headless}`}></p>
                <p className={`${styles.head} ${styles.headless}`}></p>

                {rowsData}
            </div>

            <Outlet />
        </section>
    );
};

export default Dashboard;
