import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';

import FormDashboard from './FormDashboard';

const FormUpdate = () => {
    // Params
    const params = useParams();

    // State
    const [formEl, setFormEl] = useState('');
    const [product, setProduct] = useState({});

    // Fetch
    const { sendRequest } = useFetch();

    // Side effect
    useEffect(() => {
        const reqConfig = {
            url: `http://localhost:5000/api/product/${params.productId}`,
            method: 'GET',
        };

        const dataHandler = (newData) => {
            setProduct(newData.product);
        };

        sendRequest(reqConfig, dataHandler);
    }, [sendRequest, params.productId]);

    // Handler
    const submitHandler = async (e) => {
        e.preventDefault();

        // Get form data
        const formData = Object.fromEntries(new FormData(formEl).entries());
        const formEntries = Object.entries(formData);

        // Extract images link to one single array
        const images = formEntries
            .filter((data) => data[0].startsWith('image'))
            .map((img) => img[1]);

        // Insert images field
        formData.images = images[0] ? images : product.images;

        // Delete form data field start with image e.g 'image-1' and convert price data type to number
        formEntries.forEach((data) => {
            if (data[0].startsWith('image-')) delete formData[data[0]];
            if (data[0] === 'price' || data[0] === 'stock') formData[data[0]] = +data[1];
            if (!data[1]) delete formData[data[0]];
        });

        const updatedData = {
            ...product,
            ...formData,
        };

        console.log(updatedData);

        await sendRequest({
            url: `http://localhost:5000/api/edit-data/${params.productId}`,
            method: 'PATCH',
            data: updatedData,
        });
    };

    const formRefHandler = useCallback((formEl) => setFormEl(formEl), []);

    return (
        <FormDashboard
            onSubmit={submitHandler}
            formEl={formRefHandler}
            heading="Update Product"
        />
    );
};

export default FormUpdate;
