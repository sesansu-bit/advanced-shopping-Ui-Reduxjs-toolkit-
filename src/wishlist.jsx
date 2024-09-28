import styles from "./wishlist.module.css";
import Eachwishlist from "./eachwishlist.jsx";
import { useSelector } from "react-redux";
const Wishlist= () => {
 
    const wishlistItems = useSelector((state) => state.wishlistitem);
    const items = useSelector((state) => state.items);
    const wishlistitem = items.filter((item) => { 
      const itemIndex = wishlistItems.indexOf(item.id);
      return itemIndex >= 0;
    });
    
return(
<>
{wishlistItems.length ===0 &&
 <div className={styles["add"]}><p>Add something to wishlist</p></div>
 }
<div className={styles["wishlistcontainer"]}>                
{wishlistitem.map((items)=>(<Eachwishlist key={items.id}  item={items}></Eachwishlist>))}                 
</div>                                               
</>
  );
};
export default Wishlist;