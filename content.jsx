import  Category from "./category.jsx";
import Feature from "./feature.jsx";
import Sponser from "./sponser.jsx";
import Browsing from "./browsing.jsx";
import Dealing from './dealing.jsx';
import Unique from './unique.jsx';
import styles from "./content.module.css";
import Banner from "./banner.jsx";
const Content =()=> {
  return (
    <>
<div className={styles["content"]}>
<Banner></Banner>
<Category></Category>
<Feature></Feature>
<Sponser ></Sponser>
<Browsing></Browsing>
<Dealing></Dealing>
<Unique></Unique>
</div>
    </>
  )
}

export default Content;