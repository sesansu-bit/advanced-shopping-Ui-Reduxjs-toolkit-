import styles from "./calculation.module.css";
import { useSelector } from "react-redux";
const Calculation= () => {
  const bagItemIds = useSelector((state) => state.bagitem);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 50;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
return(
    <>
   <div className={styles["calculation"]}>
    <div className={styles["itemsno"]}>Item's no.({totalItem})</div>
    <div className={styles["totalitems"]}>Total price<span>₹{totalMRP}</span></div>
    <div className={styles["discountcart"]}>Discount Price<span>-{totalDiscount}</span></div>
    <div className={styles["tax"]}>Tax fee<span>₹50</span></div>
    <div className={styles["border"]}></div>
    <div className={styles["totalamount"]}>Total Amount<span>₹{finalPayment}</span></div>
    <div className={styles["placeorder"]}>PLACE ORDER</div>
    </div>
</>
  )
}

export default Calculation;
