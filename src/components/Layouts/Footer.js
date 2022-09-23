import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <p className={styles.copyright}>&copy;2022 Sober</p>

                <Link to="/contact" className={styles.link}>
                    Contact us
                </Link>
            </div>

            <div className={styles.media}>
                <Link className={styles.link}>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>

                <Link className={styles.link}>
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>

                <Link className={styles.link}>
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
