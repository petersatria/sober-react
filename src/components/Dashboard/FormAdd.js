import { useCallback } from 'react';
import { useState } from 'react';
import useFetch from '../../hooks/use-fetch';

import FormDashboard from './FormDashboard';

const FormAdd = () => {
    // State
    const [formEl, setFormEl] = useState('');

    // Fetch
    const { sendRequest } = useFetch();

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

    const formRefHandler = useCallback((formEl) => setFormEl(formEl), []);

    return (
        <FormDashboard
            onSubmit={submitHandler}
            formEl={formRefHandler}
            heading="Add Product"
        />
    );
};

export default FormAdd;
