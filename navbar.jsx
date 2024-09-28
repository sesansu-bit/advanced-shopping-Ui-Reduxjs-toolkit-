import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import { IoCameraOutline, IoSearch } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const bagitem = useSelector((store) => store.bagitem);
  const wishlistitem = useSelector((store) => store.wishlistitem);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShining (true);
      setTimeout(() => setIsShining(false), 1500); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <>
      <div className={styles["navcover"]}>
      <Link className={styles["link"]} to="/">
        <div className={styles["logocover"]}>
          <div className={styles["s"]}>
            S<span className={styles["y"]}>Y</span>
          </div>
          <div className={styles["name"]}>
            sypreen
            <div className={styles["border"]}></div>
          </div>
        </div>
        </Link>

        <div className={styles["category"]} >

        <Link className={styles["link"]} to="/">
             <div className={styles["home"]}>Home</div>
             </Link>
             <Link className={styles["link"]} to="/men">
             <div className={styles["men"]}>Men</div>
             </Link>
             <Link className={styles["link"]} to="/women">
             <div className={styles["women"]}>Women</div>
             </Link>
             <Link className={styles["link"]} to="/Beauty">
             <div className={styles["beauty"]}>Beauty</div>
             </Link>
             <Link className={styles["link"]} to="/sports">
             <div className={styles["sport"]}>sport</div>
             </Link>
            
        </div>

        <div className={`${styles["search"]} ${isShining? styles["shine"] : ""}`} >
          <div className={styles["searchcover"]}>
            <IoSearch className={styles["searchicon"]} />
          </div>
          <div className={styles["inputcover"]}>
            <input
              type="text"
              className={styles["input"]}
              placeholder="Search for products ..."
            />
          </div>
          <div className={styles["cameracover"]}>
            <IoCameraOutline className={styles["cameraicon"]} />
          </div>
          <div className={styles["mikecover"]}>
            <TiMicrophoneOutline className={styles["mikeicon"]} />
          </div>
        </div>
        <div className={styles["threeicon"]}>
        <Link className={styles["link"]} to="/login">
        <div className={styles["account"]}>
            <MdOutlineExitToApp  className={styles["accounticon"]} />
            <p>Log in</p>
            </div>
            </Link>
            <Link className={styles["link"]} to="/wishlist">
           <div className={styles["whilist"]}>
            <FaHeart className={styles["whilisticon"]} />
            <p>Wishlist</p>
          </div>
          </Link>
          <div className={styles["wishcircle"]}>{wishlistitem.length}</div>
          <Link className={styles["link"]} to="/bag">
          <div className={styles["bag"]}>
            <IoBagHandle className={styles["bagicon"]} />
            <p>Bag</p>
          </div>
          </Link>
          <div className={styles["countcircle"]}>{bagitem.length}</div>
          <div className={styles["sideopen"]} onClick={toggleSidebar}>
          {isSidebarOpen ?
          (<FaBarsStaggered  className={styles["sideopenicon2"]} />):
          (   <FaBars className={styles["sideopenicon"]} />)}
        </div>
          </div>

       
          </div>
        



        {isSidebarOpen && ( 
    <div className={styles["secnav"]}>
        <div className={styles["category2"]}>
            <Link className={styles["link"]} to="/">
                <div className={styles["home1"]}>Home</div>
            </Link>
            <Link className={styles["link"]} to="/men">
                <div className={styles["men1"]}>Men</div>
            </Link>
            <Link className={styles["link"]} to="/women">
                <div className={styles["women1"]}>Women</div>
            </Link>
            <Link className={styles["link"]} to="/beauty">
                <div className={styles["beauty1"]}>Beauty</div>
            </Link>
            <Link className={styles["link"]} to="/sports">
                <div className={styles["sport1"]}>Sport</div>
            </Link>
        </div>
    </div>
)}
    </>
  );
};

export default Navbar;


