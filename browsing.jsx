import styles from "./browsing.module.css";
import Eachbrowsing from "./eachbrowsing.jsx";
import { useSelector } from "react-redux";
const Browsing= () => {
const itemb = useSelector((store) => store.browsingitem);
return(
    <>
<div className={styles["browsingcover"]}>
<div className={styles["browsingbanner"]}>
CONTINUE BROWSING BRANDS
</div>
<div className={styles["browsingcontainer"]}>
{itemb.map((items)=>(<Eachbrowsing key={items.id}  item={items}></Eachbrowsing>))} 
</div>
</div>
</>
  );
};

export default Browsing;