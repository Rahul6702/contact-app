import styles from "./Navigation.module.css";
import { LuMenuSquare } from "react-icons/lu";
const Navigation=()=>{
  return(
    <>
    <nav className={`${styles.navigation} container`}>
      <div >
        <img src="/images/tech-support.png" alt="" />
      </div>

      <ul className={styles.navLink}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <LuMenuSquare className={styles.menu} display="none" fontSize="30px"/>
    </nav>
   
    </>
  );
}
export default Navigation;