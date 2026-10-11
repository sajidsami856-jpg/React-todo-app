import styles from "./ErrorMsg.module.css";
const ErrorMsg =({currTask})=>{
    console.log(currTask);
    return (currTask.length === 0 && <h2 className={styles.welcome}>Make your todo list</h2>);
}
export default ErrorMsg;