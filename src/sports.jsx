import styles from "./sports.module.css";
import Eachsports from "./eachsports.jsx";
import { useSelector } from "react-redux";
const Sports= () => {  
const itemg = useSelector((store) => store.sportsitem); 
return(
    <>
<div className={styles["sportscontainer"]}>
{itemg.map((items)=>(<Eachsports key={items.id}  item={items}></Eachsports>))} 
</div>
</>
);
};
export default Sports;