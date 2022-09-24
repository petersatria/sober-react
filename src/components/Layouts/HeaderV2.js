import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import styles from './HeaderV2.module.css';

const HeaderV2 = (props) => {
    return (
        <header className={styles.header}>
            <h2 className={styles.heading}>{props.heading}</h2>
            <NavLink to="/" className={styles['btn--cross']}>
                <FontAwesomeIcon className={styles['logo-cross']} icon={faXmark} />
            </NavLink>
        </header>
    );
};

export default HeaderV2;
