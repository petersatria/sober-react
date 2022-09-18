import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles['input-group']}>
            <input className={styles.input} type={props.type} placeholder={props.label} />

            <label className={styles.label}>{props.label}</label>
        </div>
    );
};

export default Input;
