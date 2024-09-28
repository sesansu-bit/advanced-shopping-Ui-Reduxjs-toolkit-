import styles from "./household.module.css";
import Eachhousehold from "./eachhousehold.jsx";
import { useSelector } from "react-redux";
const household= () => {
const itemh = useSelector((store) => store.houseitem);
    return(
        <>
    <div className={styles["householdcontainer"]}>
    {itemh.map((items)=>(<Eachhousehold key={items.id}  item={items}></Eachhousehold>))} 
    </div>
    </>
      );
    };
    export default household;