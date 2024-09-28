import styles from "./unique.module.css";
import Eachunique from "./eachunique.jsx";
import { useSelector } from "react-redux";
const Unique= () => {
const itemc = useSelector((store) => store.uniqueitem);
return(
    <>
<div className={styles["uniquebanner"]}>
UNIQUE COLLECTION
</div>
<div className={styles["uniquecontainer"]}>
{itemc.map((items)=>(<Eachunique key={items.id}  item={items}></Eachunique>))} 
</div>
</>
  );
};

export default Unique;