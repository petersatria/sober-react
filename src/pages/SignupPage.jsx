import Signup from '../components/Signup/Signup';

import styles from './SignupPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import brandLogo from '../assets/logo-light.svg';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.heading}>My Account</h2>
                <button className={styles['btn--cross']}>
                    <FontAwesomeIcon className={styles['logo-cross']} icon={faXmark} />
                </button>
            </header>

            <main className={styles.main}>
                <div>
                    <img src={brandLogo} alt="Brand Logo" />
                </div>

                <Signup />
            </main>
        </div>
    );
};

export default SignupPage;
