import styles from "./beauty.module.css";
import Eachbeauty from "./eachbeauty.jsx";
import { useSelector } from "react-redux";
const Beauty= () => {
const iteme = useSelector((store) => store.beautyitem);
    return(
        <>
    <div className={styles["beautycontainer"]}>
    {iteme.map((items)=>(<Eachbeauty key={items.id}  item={items}></Eachbeauty >))} 
    </div>
    </>
      );
    };
    export default Beauty;