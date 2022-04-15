import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
  return(
    <button className={styles.btn}>
      {text}
    </button>
  );
}

Button.protoTypes = {
  text: PropTypes.string.isRequired,

}

// App.js에서 Button을 가져올 수 있게 하기 위해서
export default Button;
