import styles from "./category.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const Category= () => {
return(
    <>
<div className={styles["categorybanner"]} >
CATEGORY
</div>

<div className={styles["category"]}>
<Link className={styles["link"]} to="/special">
<div className={styles["recommendcover"]}>
<div className={styles["imagediv"]}><img src="https://st.depositphotos.com/2036511/3589/v/950/depositphotos_35890715-stock-illustration-blue-top-quality-badge-with.jpg"/></div>
<div className={styles["title1"]}>sypreen recommendation</div>
</div>
</Link>
<Link className={styles["link"]} to="/men">
<div className={styles["men"]}>
<div className={styles["imagediv"]}><img src="https://i.pinimg.com/736x/05/42/59/05425956e846b562dff86f712b70a6f6.jpg"/></div>
<div className={styles["title2"]}>men fashion</div>
</div>
</Link>
<Link className={styles["link"]} to="/women">
<div className={styles["women"]}>
<div className={styles["imagediv"]}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3bffe749995999.58c8bf7e44d49.jpg"/></div>
<div className={styles["title3"]}>women fashion</div>
</div>
</Link>
<Link className={styles["link"]} to="/Beauty">
<div className={styles["beauty"]}>
<div className={styles["imagediv"]}><img src="https://s3.envato.com/files/227921656/01_preview4.jpg"/></div>
<div className={styles["title4"]}>beauty produts</div>
</div>
</Link>
<Link className={styles["link"]} to="/household">
<div className={styles["electronics"]}>
<div className={styles["imagediv"]}><img src="https://i.pinimg.com/originals/eb/45/65/eb45656d5c307ae9182c58c088eca678.jpg"/></div>
<div className={styles["title5"]}>household products</div>
</div>
</Link>
<Link className={styles["link"]} to="/electronics">
<div className={styles["sports"]}>
<div className={styles["imagediv"]}><img src="https://image.freepik.com/free-vector/modern-headphone-web-banner-templates-design_78815-440.jpg"/></div>
<div className={styles["title6"]}>electronics products</div>
</div>
</Link>
<Link className={styles["link"]} to="/sports">
<div className={styles["perfume"]}>
<div className={styles["imagediv"]}><img src="https://coreldrawdesign.com/resources/previews/preview-new-arrival-sport-shoes-poster-banner-download-from-coreldrawdesign-1625564772.jpg"/></div>
<div className={styles["title7"]}>sports fashion</div>
</div>
</Link>
<Link className={styles["link"]} to="/luggage">
<div className={styles["luggage"]}>
<div className={styles["imagediv"]}><img src="https://img.freepik.com/premium-photo/luggage-suitcase-airport-wide-banner-with-copy-space-area-vacations-holiday-travel-concepts-generativ-ai_728202-1587.jpg"/></div>
<div className={styles["title8"]}>luggages branded</div>
</div>
</Link>
<Link className={styles["link"]} to="/special">
<div className={styles["arrow"]}>
<div className={styles["imagediv"]}><MdArrowForwardIos className={styles["arrowicon"]} /></div>
</div>
</Link>
</div>
</>
  );
};

export default Category;
/* className={styles[""]}*/ 