import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ toDo }) {
  return <button className={styles.btn}>{toDo}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired
};
export default Button;
