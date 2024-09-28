import styles from "./eachluggage.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { bagitemAction } from "./bag.js";
import { wishlistitemAction } from "./wishlist.js";
import { useState } from "react";

const Eachluggage= ({item}) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const bagItems = useSelector((store) => store.bagitem);
  const wishlistItems = useSelector((store) => store.wishlistitem);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const elementFound2 = wishlistItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagitemAction.addToBag(item.id));
  };

  const handleAddToWishlist = () => {
    dispatch(wishlistitemAction.addToWishlist(item.id));
  };

  const handleRemove = () => {
    dispatch(bagitemAction.removeFromBag(item.id));
  };

  const handleRemoveWish = () => {
    dispatch(wishlistitemAction.removeFromWishlist(item.id));
  };

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={styles["eachcontainer"]}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={item.image} alt={item.item_name} />

        {hovered && (
          <div className={styles["wishlistcover"]} >
              {elementFound2 ? (
                <>   
                <div className={styles["wishlist"]}>
                  <div
                    className={styles["textremove"]} onClick={handleRemoveWish}
                  >
                    Remove
                  </div>
                  <div className={styles["h"]}>
                    <FaHeart className={styles["hicon"]} onClick={handleRemoveWish}/>
                  </div>
                  </div>
                </>
              ) : (
                <>
                 <div className={styles["wishlist"]} >
                  <div className={styles["text"]} onClick={handleAddToWishlist}>
                    wishlist
                  </div>
                  <div className={styles["h"]}>
                    <FaRegHeart className={styles["hicon"]} onClick={handleAddToWishlist}/>
                  </div>
                  </div>
                </>
              )}
            </div>
       
        )}

        <div className={styles["productrating"]}>
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>

        <div className={styles["detailed"]}>
          <div className={styles["companyname"]}>{item.company}</div>
          <div className={styles["productname"]}>{item.item_name}</div>
          <div className={styles["price"]}>
            <span className={styles["ongoingprice"]}>
              Rs.{item.current_price}
            </span>
            <span className={styles["originalprice"]}>
              Rs.{item.original_price}
            </span>
            <span className={styles["discount"]}>
              ({item.discount_percentage} off)
            </span>
          </div>
          {elementFound ? (
            <div className={styles["remove"]} onClick={handleRemove}>
              remove item
            </div>
          ) : (
            <div className={styles["addtocart"]} onClick={handleAddToBag}>
              Add to Cart
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Eachluggage;