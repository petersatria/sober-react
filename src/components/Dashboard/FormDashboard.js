import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';

import Form from '../GeneralUI/Form';
import Input from '../GeneralUI/Input';
import Overlay from '../GeneralUI/Overlay';
import HeaderV2 from '../Layouts/HeaderV2';

import styles from './FormDashboard.module.css';

const FormDashboard = () => {
    // Params
    const params = useParams();

    // Fetch hook
    const { sendRequest, pending, result, status } = useFetch();

    // Ref
    const idInputRef = useRef();
    const nameInputRef = useRef();
    const thumbnailInputRef = useRef();
    const recommendationInputRef = useRef();
    const priceInputRef = useRef();
    const imagesInputRef = useRef();

    // Handler
    const submitFormHandler = (e) => {
        e.preventDefault();

        const productUpdateInput = {
            id: idInputRef?.current?.value || null,
            name: nameInputRef?.current?.value || null,
            thumbnail: thumbnailInputRef?.current?.value || null,
            recommendation: recommendationInputRef?.current?.value || null,
            price: priceInputRef?.current?.value || null,
            images: imagesInputRef?.current?.value || null,
        };

        sendRequest({
            method: 'PATCH',
            url: `http://localhost:5000/api/edit-data/${params.productId}`,
            data: productUpdateInput,
        });

        idInputRef.current.reset();
        nameInputRef.current.reset();
        thumbnailInputRef.current.reset();
        priceInputRef.current.reset();
        imagesInputRef.current.reset();
    };

    const notifResultMessage =
        result === 'error'
            ? 'Something went wrong, Please try again later'
            : 'Register successful';

    const notifMessage = pending ? 'Registering your account...' : notifResultMessage;

    const notif = (
        <div className={styles.notif}>
            <p className={styles['notif-status']}>{status}</p>
            <p className={styles['notif-message']}>{notifMessage}</p>
        </div>
    );

    return (
        <Overlay>
            <HeaderV2 heading="Update Products" path="/admin" />
            <div className={styles.container}>
                {status !== '' && notif}

                <Form onSubmit={submitFormHandler}>
                    <div className={styles['form-group']}>
                        <Input ref={idInputRef} type="text" label="ID" />

                        <Input ref={nameInputRef} type="text" label="Name" />

                        <Input ref={thumbnailInputRef} type="text" label="Thumbnail" />

                        {/* <Input
                            ref={recommendationInputRef}
                            type="text"
                            label="Recommendation"
                        /> */}

                        {/* <Input ref={priceInputRef} type="text" label="Price" /> */}

                        {/* <Input ref={imagesInputRef} type="text" label="Image link" /> */}
                    </div>

                    <div className={styles['form-group']}>
                        <button className={styles['btn-signup']}>Update</button>
                    </div>
                </Form>
            </div>
        </Overlay>
    );
};

export default FormDashboard;
