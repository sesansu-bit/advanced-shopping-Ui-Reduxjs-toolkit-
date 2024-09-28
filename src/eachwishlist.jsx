import styles from "./eachwishlist.module.css";
import { useDispatch} from "react-redux";
import {bagitemAction} from "./bag.js";
import {wishlistitemAction} from "./wishlist.js";
const Eachwishlist= ({item}) => {
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagitemAction.addToBag(item.id));
  };
  const handleRemoveWish = () => {
    dispatch(wishlistitemAction.removeFromWishlist(item.id));
  };
  const handleCombinedClick = () => {
    handleAddToBag();
    handleRemoveWish();
};
return(
    <>
<div className={styles["eachcontainer"]}>
            <img src={item.image}/>
            <div className={styles["productrating"]}>{item.rating.stars} ⭐ | {item.rating.count}</div>
             <div className={styles["detailed"]}>
                 <div className={styles["companyname"]}>{item.company}</div>
                 <div className={styles["productname"]}>{item.item_name}</div>
                 <div className={styles["price"]}>
                 <span className={styles["ongoingprice"]}>Rs.{item.current_price}</span>
                 <span className={styles["originalprice"]}>Rs.{item.original_price}</span>
                 <span className={styles["discount"]}>({item.discount_percentage}off)</span> 
                 </div>
                
        <div className= {styles["addtocart"]} onClick={handleCombinedClick}>Add to Cart</div>
             </div>
        </div>

</>
  );
};
export default Eachwishlist;