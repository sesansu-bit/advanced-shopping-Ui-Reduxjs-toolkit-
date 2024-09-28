import styles from "./eachbag.module.css";
import { RxCross1 } from "react-icons/rx";
import {bagitemAction} from "./bag.js";
import { useDispatch } from "react-redux";

const Eachbag= ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagitemAction.removeFromBag(item.id));
  };

return(
    <>
< div className={styles["eachcart"]}>
  <div className={styles["cartimage"]}><img src={item.image}/></div>
  <div className={styles["cartdetailed"]}>
     <div className={styles["cartcompanyname"]} >{item.company}</div>
     <div className={styles["cartproductname"]}>{item.item_name}</div>
     <div className={styles["cartprice"]}>
     <span className={styles["cartongoingprice"]}>Rs.{item.current_price}</span>
     <span className={styles["cartoriginalprice"]}>Rs.{item.original_price}</span>
     <span className={styles["cartdiscount"]}>({item.discount_percentage}off)</span> 
     </div>
     <div className={styles["cartdate"]}>
         <span className={styles["days"]}>{item.return_period} days</span>
         <span className={styles["return"]}>return available</span>
     </div>
     <div className={styles["reach"]}>
         <span className={styles["delevery"]}>Delivery by</span>
         <span className={styles["date"]}> {item.delivery_date}</span>
 </div>       
 </div>
 <div className={styles["delete"]} onClick={handleRemoveItem}><RxCross1 className={styles["deleteicon"]} /></div> 
  </div>
</>
  )
}

export default Eachbag;
