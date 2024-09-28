import styles from "./banner.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000); 
    }, 5000); // Repeat every 7 seconds (2s animation + 3s delay)

    return () => clearInterval(interval); 
  }, []);

    return(
      <>
<div className={styles["bannercover"]}>
<div className={styles["bannertext"]}>
<div className={`${styles["brand"]} ${isAnimating? styles["animate"] : ""}`}>
          BRAND
</div>
<div className={`${styles["sale"]} ${isAnimating? styles["animate2"] : ""}` }>sale</div>
<div className={`${styles["about"]} ${isAnimating? styles["animate3"] : ""}`}>Brands sale is currently going on at very lowest price best grab special offer click on shop now never miss out this oppertunity.  </div>
<Link className={styles["link"]} to="/electronics">
<div className={styles["buttoncontainer"]}>
<div className={`${styles["readmore"]} ${isAnimating? styles["animate4"] : ""}` }>
  READ MORE</div>
<div className={`${styles["shopnow"]} ${isAnimating? styles["animate5"] : ""}` }>SHOP NOW</div>
</div>
</Link>
</div>
<div className={styles["bannerimage"]}>
  <img src="https://github.com/ShariqAnsari88/strapi-simple-one-client/blob/main/src/assets/banner-img.png?raw=true"/>
</div>
</div>

<div className={styles["bannercover1"]}>
<div className={styles["bannerimage1"]}>
  <img src="https://github.com/ShariqAnsari88/strapi-simple-one-client/blob/main/src/assets/banner-img.png?raw=true"/>
</div>

<div className={styles["brand1"]}>
BRAND
</div>
<div className={styles["sale1"]}>sale</div>
<div className={styles["about1"]}>Brands sale is currently going on at very lowest price best grab special offer click on shop now never miss out this oppertunity.  </div>
<Link className={styles["link"]} to="/electronics">
<div className={styles["readmore1"] }>
  READ MORE</div>
<div className={styles["shopnow1"]}  >SHOP NOW</div>

</Link>


</div>

</>
  );
};

export default Banner;
