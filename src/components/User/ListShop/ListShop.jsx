import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userActions } from "../../../models/users";
import styles from "./ListShop.module.css";
import { getReviewsThunk } from "../../../models/users";
function ListShop() {
  const shops = useSelector((state) => state.admin.shops);
  const dispatch = useDispatch();
  console.log(shops);
  return (
    <div>
      <ul className={styles.ul}>
        {shops.map(({ address, city, statusClose }, index) =>
          !statusClose ? (
            <li key={index} className={styles.li}>
              {console.log(address, city, statusClose)}
              <p>{address}</p>
              <p>{city}</p>

              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activClassName : styles.item
                }
                to={"/ListReviewOnShop"}
              >
                <button
                  onClick={() => {
                    dispatch(userActions.setCurrentShop({ id_shop: index, address:address }));
                    dispatch(getReviewsThunk({ id_shop: index }));
                  }}
                >
                  Посмотреть отзывы
                </button>
              </NavLink>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}
export default ListShop;
