import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Overlay from '../GeneralUI/Overlay';
import HeaderV2 from '../Layouts/HeaderV2';

import styles from './FormDashboard.module.css';

const FormDashboard = (props) => {
    // States
    const [imgNum, setImgNum] = useState(1);

    // Refs
    const formRef = useRef();

    // Side effect
    const { formEl } = props;
    useEffect(() => {
        formEl(formRef.current);
    }, [formEl]);

    const imgLinkInput = [];
    for (let i = 0; i < imgNum; i++) {
        imgLinkInput.push(
            <div key={i} className={styles.fgroup}>
                <input className={styles.input} type="text" name={`image-${i}`} />
                <label className={styles.label}>Image link</label>
            </div>
        );
    }

    // Handler
    const addImgInputHandler = () => {
        setImgNum((prevState) => prevState + 1);
    };

    return (
        <Overlay>
            <div className={styles.container}>
                <HeaderV2 heading={props.heading} path="/admin" />

                <form ref={formRef} onSubmit={props.onSubmit} className={styles.form}>
                    <div className={styles.fgroup}>
                        <input className={styles.input} type="text" name="name" />
                        <label className={styles.label}>Product name</label>
                    </div>

                    <div className={styles.fgroup}>
                        <textarea
                            className={`${styles.input} ${styles.tarea}`}
                            name="detail"
                        />
                        <label className={styles.label}>Product detail</label>
                    </div>

                    <div className={styles.fgroup}>
                        <input className={styles.input} type="text" name="thumbnail" />
                        <label className={styles.label}>Thumbnail</label>
                    </div>

                    <div className={styles.fgroup}>
                        <input className={styles.input} type="number" name="price" />
                        <label className={styles.label}>Price</label>
                    </div>

                    <div className={styles.fgroup}>
                        <input className={styles.input} type="number" name="stock" />
                        <label className={styles.label}>Stock</label>
                    </div>

                    {imgLinkInput}

                    <div className={styles.fgroup}>
                        <button
                            type="button"
                            onClick={addImgInputHandler}
                            className={styles.btn}
                        >
                            Add image link
                        </button>
                    </div>

                    <div className={styles.fgroup}>
                        <button className={styles.btn}>{props.heading}</button>
                    </div>
                </form>
            </div>
        </Overlay>
    );
};

export default FormDashboard;
