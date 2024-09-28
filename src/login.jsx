import styles from "./login.module.css";
const Login= () => {
return(
    <>
<div className={styles["logincover"]}>
<div className={styles["circle"]}>
<div className={styles["circle1"]}> </div>
<div className={styles["circle2"]}></div>
</div>
<div className={styles["logindetail"]}>
            <p>Log <span>In</span></p>
            <input   placeholder="Username"/>
            <input placeholder="Password"/>
            <br/>
            <div className={styles["button"]}>Log in</div>
                <div className={styles["forget"]}>Forget Password? <span className={styles["signin"]}>signin</span></div>
        </div>
</div>
</>
  );
};
export default Login;