import {useSelector} from "react-redux"
import styles from "./listShop.module.css";
import React from "react";
function ListShop(){
    const shops = useSelector(state => state.admin.shops)

    console.log(shops)
    return (
      <div>
        <ul className={styles.ul}>
          {shops.map(({ address, city, statusClose,workers }, index) => (
            <li key={index} className={styles.li}>
              {console.log(address, city, statusClose)}
              <p>{address}</p>
              <p>{city}</p>
              <p>Close:{statusClose ? "close" : "not close"}</p>
              {!statusClose?
                <div>
                  Адреса рабочих:
                  {workers.map((value, index) => {
                    return <p key={index}>{value}</p>
                  })}
                </div>:null}
            </li>
          ))}
        </ul>
      </div>
    );
}
export default ListShop