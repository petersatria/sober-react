import { useRef } from 'react';
import useFetch from '../../hooks/use-fetch';

import Form from '../GeneralUI/Form';
import Input from '../GeneralUI/Input';
import ValidationFunction from '../GeneralUI/ValidationFunction';

import styles from './Signup.module.css';

import hostUrl from '../../url';

const Signup = () => {
    // Fetch hook
    const { sendRequest, pending, result, status } = useFetch();

    // Ref
    const nameInputRef = useRef();
    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const birthdateInputRef = useRef();

    // Handler
    const submitFormHandler = (e) => {
        e.preventDefault();

        if (
            !(
                nameInputRef.current.valueIsValid &&
                usernameInputRef.current.valueIsValid &&
                emailInputRef.current.valueIsValid &&
                passwordInputRef.current.valueIsValid &&
                birthdateInputRef.current.valueIsValid
            )
        )
            return;

        const registerInput = {
            name: nameInputRef.current.value,
            username: usernameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            birthdate: birthdateInputRef.current.value,
        };

        sendRequest({
            method: 'POST',
            url: `${hostUrl}/api/user/signup`,
            data: registerInput,
        });

        nameInputRef.current.reset();
        usernameInputRef.current.reset();
        emailInputRef.current.reset();
        passwordInputRef.current.reset();
        birthdateInputRef.current.reset();
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
        <div className={styles.signup}>
            {status !== '' && notif}

            <Form onSubmit={submitFormHandler}>
                <div className={styles['form-group']}>
                    <Input
                        ref={nameInputRef}
                        validation={ValidationFunction.notEmptyValidation}
                        type="text"
                        label="Name"
                        errorMsg="Name must not empty"
                    />

                    <Input
                        ref={usernameInputRef}
                        validation={ValidationFunction.notEmptyValidation}
                        type="text"
                        label="Username"
                        errorMsg="Username must not empty"
                    />
                    <Input
                        ref={emailInputRef}
                        validation={ValidationFunction.emailValidation}
                        type="email"
                        label="Email Address"
                        errorMsg="Please input valid email"
                    />
                    <Input
                        ref={passwordInputRef}
                        validation={ValidationFunction.passwordValidation}
                        type="password"
                        label="Password"
                        errorMsg="Password must have at least 7 character"
                    />

                    <Input
                        ref={birthdateInputRef}
                        validation={ValidationFunction.birthdateValidation}
                        type="date"
                        label="Birtdate"
                        errorMsg="Birthdate must earlier than today"
                    />
                </div>

                <div className={styles['form-group']}>
                    <button className={styles['btn-signup']}>Sign Up</button>
                </div>
            </Form>
        </div>
    );
};

export default Signup;
