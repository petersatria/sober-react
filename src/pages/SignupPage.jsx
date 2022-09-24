import Signup from '../components/Signup/Signup';

import styles from './SignupPage.module.css';
import brandLogo from '../assets/logo-light.svg';
import HeaderV2 from '../components/Layouts/HeaderV2';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <HeaderV2 heading="My Account" path="/" />

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
