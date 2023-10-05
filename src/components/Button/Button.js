import styles from './Button.module.css'

function Button({label, onClick}) {

    return (
      <button className={styles.btn} onClick={onClick} type='button'>{label}</button>
    );
  }
  
  export default Button;
