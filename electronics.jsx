import styles from "./electronics.module.css";
import Eachelectronics from "./eachelectronic.jsx";
import { useSelector } from "react-redux";
const Electronics= () => {
const itemf= useSelector((store) => store.electronicsitem);
    return(
        <>
    <div className={styles["electronicscontainer"]}>
    {itemf.map((items)=>(<Eachelectronics key={items.id}  item={items}></Eachelectronics >))} 
    </div>
    </>
      );
    };
    export default Electronics;