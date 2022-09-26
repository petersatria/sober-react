import { useRef } from 'react';
import { useState } from 'react';
import useFetch from '../../hooks/use-fetch';
import Overlay from '../GeneralUI/Overlay';
import HeaderV2 from '../Layouts/HeaderV2';

import styles from './FormDashboard.module.css';

const FormAdd = () => {
    // States
    const [imgNum, setImgNum] = useState(1);

    // Refs
    const formRef = useRef();

    const imgLinkInput = [];
    for (let i = 0; i < imgNum; i++) {
        imgLinkInput.push(
            <div key={i} className={styles.fgroup}>
                <input className={styles.input} type="text" name={`image-${i}`} />
                <label className={styles.label}>Image link</label>
            </div>
        );
    }

    // Fetch
    const { sendRequest } = useFetch();

    // Handler
    const addImgInputHandler = () => {
        setImgNum((prevState) => prevState + 1);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Get form data
        const formData = Object.fromEntries(new FormData(formRef.current).entries());
        const formEntries = Object.entries(formData);

        // Extract images link to one single array
        const images = formEntries
            .filter((data) => data[0].startsWith('image'))
            .map((img) => img[1]);

        // Delete form data field start with image e.g 'image-1' and convert price data type to number
        formEntries.forEach((data) => {
            if (data[0].startsWith('image')) delete formData[data[0]];
            if (data[0] === 'price' || data[0] === 'stock') formData[data[0]] = +data[1];
        });

        // Insert images field
        formData.images = images;

        await sendRequest({
            url: 'http://localhost:5000/api/create-product',
            method: 'POST',
            data: formData,
        });
    };

    return (
        <Overlay>
            <div className={styles.container}>
                <HeaderV2 heading="Add product" path="/admin" />

                <form ref={formRef} onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.fgroup}>
                        <input className={styles.input} type="text" name="id" />
                        <label className={styles.label}>ID</label>
                    </div>

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
                        <button className={styles.btn}>Add</button>
                    </div>
                </form>
            </div>
        </Overlay>
    );
};

export default FormAdd;

// import { useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/use-fetch';

// import Form from '../GeneralUI/Form';
// import Input from '../GeneralUI/Input';
// import Overlay from '../GeneralUI/Overlay';
// import HeaderV2 from '../Layouts/HeaderV2';

// import styles from './FormDashboard.module.css';

// const FormDashboard = () => {
//     // Params
//     const params = useParams();

//     // Fetch hook
//     const { sendRequest, pending, result, status } = useFetch();

//     // Ref
//     const idInputRef = useRef();
//     const nameInputRef = useRef();
//     const thumbnailInputRef = useRef();
//     const recommendationInputRef = useRef();
//     const priceInputRef = useRef();
//     const imagesInputRef = useRef();

//     // Handler
//     const submitFormHandler = (e) => {
//         e.preventDefault();

//         const productUpdateInput = {
//             id: idInputRef?.current?.value,
//             name: nameInputRef?.current?.value,
//             thumbnail: thumbnailInputRef?.current?.value,
//             recommendation: recommendationInputRef?.current?.value,
//             price: +priceInputRef?.current?.value,
//             images: [...imagesInputRef?.current?.value.split(',')],
//         };

//         sendRequest({
//             method: 'PATCH',
//             url: `http://localhost:5000/api/edit-data/${params.productId}`,
//             data: productUpdateInput,
//         });

//         idInputRef.current.reset();
//         nameInputRef.current.reset();
//         thumbnailInputRef.current.reset();
//         priceInputRef.current.reset();
//         imagesInputRef.current.reset();
//     };

//     const notifResultMessage =
//         result === 'error'
//             ? 'Something went wrong, Please try again later'
//             : 'Register successful';

//     const notifMessage = pending ? 'Registering your account...' : notifResultMessage;

//     const notif = (
//         <div className={styles.notif}>
//             <p className={styles['notif-status']}>{status}</p>
//             <p className={styles['notif-message']}>{notifMessage}</p>
//         </div>
//     );

//     return (
//         <Overlay>
//             <HeaderV2 heading="Update Products" path="/admin" />

//             <div className={styles.container}>
//                 {status !== '' && notif}

//                 <Form onSubmit={submitFormHandler}>
//                     <div className={styles['form-group']}>
//                         <Input ref={idInputRef} type="text" label="ID" />

//                         <Input ref={nameInputRef} type="text" label="Name" />

//                         <Input ref={thumbnailInputRef} type="text" label="Thumbnail" />

//                         <Input
//                             ref={recommendationInputRef}
//                             type="text"
//                             label="Recommendation"
//                         />

//                         <Input ref={priceInputRef} type="text" label="Price" />

//                         <Input ref={imagesInputRef} type="text" label="Image link" />
//                     </div>

//                     <div className={styles['form-group']}>
//                         <button className={styles['btn-signup']}>Update</button>
//                     </div>
//                 </Form>
//             </div>
//         </Overlay>
//     );
// };

// export default FormDashboard;
