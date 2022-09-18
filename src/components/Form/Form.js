import Input from './Input';

import styles from './Form.module.css';

const Form = (props) => {
    return (
        <form className={styles.form}>
            <div className={styles['form-group']}>
                <Input type="text" label="Username" />
                <Input type="email" label="Email Address" />
                <Input type="password" label="Password" />
            </div>

            <div className={styles['form-group']}>
                <button className={styles['btn-signup']}>{props.buttonText}</button>
            </div>
        </form>
    );
};

export default Form;
