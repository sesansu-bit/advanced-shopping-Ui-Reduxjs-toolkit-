import styles from "./bag.module.css";
import Calculation from "./calculation.jsx";
import Eachbag from "./eachbag.jsx";
import { useSelector } from "react-redux";
const Bag= () => {
    const bagItems = useSelector((state) => state.bagitem);
    const items = useSelector((state) => state.items);
    const bagitem = items.filter((item) => {
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >= 0;
    });
   
return(
    <>
    {bagitem.length ===0 &&
 <div className={styles["add"]}><p>Add something to Bag</p></div>
 }
<div className={styles["fullcart"]}>
    <div className={styles["leftcart"]}>
    {bagitem.map((itembag)=>(<Eachbag key={itembag.id}  item={itembag}></Eachbag>))} 
    </div> 

    {bagitem.length > 0 && (
    <div className={styles["rightcart"]}>
      <Calculation />
    </div>
  )}
</div>
</>
  );
};
export default Bag;












/*     let bagSummaryElement = document.querySelector('.rightcart');
 let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagit => {
    totalMRP += bagit.original_price;
    totalDiscount += bagit.original_price - bagit.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + TAX;
  

  bagSummaryElement.innerHTML = `<div className="calculation">
    <div className="itemsno">Item's no.({totalItem})</div>
    <div className="totalitems">Total price<span>₹{totalMRP}</span></div>
    <div className="discountcart">Discount Price<span>-{totalDiscount}</span></div>
    <div className="tax">Tax fee<span>₹50</span></div>
    <div className="border"></div>
    <div className="totalamount">Total Amount<span>₹{finalPayment}</span></div>
    <div className="placeorder">PLACE ORDER</div>
    </div>`*/

