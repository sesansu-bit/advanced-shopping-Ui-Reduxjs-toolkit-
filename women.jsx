import styles from "./women.module.css";
import Eachwomen from "./eachwomen.jsx";
import { useSelector } from "react-redux";
const Women= () => {
const itemd = useSelector((store) => store.womenitem);
return(
    <>
<div className={styles["womencontainer"]}>
{itemd.map((items)=>(<Eachwomen key={items.id}  item={items}></Eachwomen>))} 
</div>
</>
  );
};
export default Women;