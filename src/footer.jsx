import styles from "./footer.module.css";
const Footer= () => {
return(
    <>
<div className={styles["footercontainer"]}>
        <div className={styles["footer_column"]}>
            <h3>ONLINE SHOPPING</h3>

            <a >Men</a>
            <a >Women</a>
            <a >Kids</a>
            <a >Home & Living</a>
            <a >Beauty</a>
            <a >Gift Card</a>
            <a >Myntra Insider</a>
        </div>

        <div className={styles["footer_column"]}>
            <h3>CUSTOMER POLICIES</h3>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy policy</a>
            <a href="#">Grievance Officer</a>
        </div>

        <div className={styles["footer_column"]}>
            <h3>USEFUL LINKS</h3>
            <a >Blog</a>
            <a >Careers</a>
            <a >Site Map</a>
            <a >Corporate Information</a>
            <a >Whitehat</a>
            <a >Gift Card</a>
            <a >Cleartrip</a>
        </div>
    </div>
    <div className={styles["copyright"]}>
        © 2023 www.sypreen.com. All rights reserved.
    </div>
</>
  );
};

export default Footer;