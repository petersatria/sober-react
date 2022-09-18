import Form from '../Form/Form';

import styles from './Signup.module.css';

const Signup = () => {
    return (
        <section className={styles.container}>
            <div className={styles.signup}>
                <div className={styles.logo}>LOGO</div>

                <Form buttonText="Sign Up" />
            </div>
            <div className="image"></div>
        </section>
    );
};

export default Signup;
