import styles from "./men.module.css";
import Eachmen from "./eachmen.jsx";
import { useSelector } from "react-redux";
const Men= () => {
const itemc = useSelector((store) => store.menitem);
return(
    <>
<div className={styles["mencontainer"]}>
{itemc.map((items)=>(<Eachmen key={items.id}  item={items}></Eachmen>))} 
</div>
</>
  );
};
export default Men;