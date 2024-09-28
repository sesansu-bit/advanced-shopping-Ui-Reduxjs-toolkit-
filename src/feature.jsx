import styles from "./feature.module.css";
import Eachfeature from "./eachfeature.jsx";
import { useSelector } from "react-redux";
const Feature= () => {
const itema = useSelector((store) => store.featureitem);
return(
    <>
<div className={styles["featurebanner"]}>
<div className={styles["featureban"]}>
FEATURED BRAND
</div>
</div>
<div className={styles["featurecontainer"]}>
{itema.map((items)=>(<Eachfeature key={items.id}  item={items}></Eachfeature>))} 
</div>
</>
);};
export default Feature;