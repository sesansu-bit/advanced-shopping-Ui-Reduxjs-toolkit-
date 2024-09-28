import styles from "./luggage.module.css";
import Eachluggage from "./eachluggage.jsx";
import { useSelector } from "react-redux";
const Luggage= () => {
const itemi = useSelector((store) => store.luggageitem);
return(
    <>
<div className={styles["luggagecontainer"]}>
{itemi.map((items)=>(<Eachluggage key={items.id}  item={items}></Eachluggage>))} 
</div>
</>
  );
};
export default Luggage;