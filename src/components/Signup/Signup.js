import { useRef } from 'react';
import Form from '../Form/Form';
import Input from '../Form/Input';

import styles from './Signup.module.css';

const Signup = () => {
    // Ref
    const nameInputRef = useRef();
    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const birthdateInputRef = useRef();

    // Validation Function
    const notEmptyValidation = (value) => value.length > 0;
    const emailValidation = (value) => value.includes('@') && !value.includes(' ');
    const passwordValidation = (value) => value.length > 6;
    const birthdateValidation = (value) => new Date(value).getTime() < Date.now();

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
            email: usernameInputRef.current.value,
            password: usernameInputRef.current.value,
            birthdate: usernameInputRef.current.value,
        };
        console.log(registerInput);

        nameInputRef.current.reset();
        usernameInputRef.current.reset();
        emailInputRef.current.reset();
        passwordInputRef.current.reset();
        birthdateInputRef.current.reset();
    };

    return (
        <section className={styles.container}>
            <div className={styles.signup}>
                <div className={styles.logo}>LOGO</div>

                <Form onSubmit={submitFormHandler}>
                    <div className={styles['form-group']}>
                        <Input
                            ref={nameInputRef}
                            validation={notEmptyValidation}
                            type="text"
                            label="Name"
                            errorMsg="Name must not empty"
                        />

                        <Input
                            ref={usernameInputRef}
                            validation={notEmptyValidation}
                            type="text"
                            label="Username"
                            errorMsg="Username must not empty"
                        />
                        <Input
                            ref={emailInputRef}
                            validation={emailValidation}
                            type="email"
                            label="Email Address"
                            errorMsg="Please input valid email"
                        />
                        <Input
                            ref={passwordInputRef}
                            validation={passwordValidation}
                            type="password"
                            label="Password"
                            errorMsg="Password must have at least 7 character"
                        />

                        <Input
                            ref={birthdateInputRef}
                            validation={birthdateValidation}
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
            <div className="image"></div>
        </section>
    );
};

export default Signup;
