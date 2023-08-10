import { useSelector } from "react-redux";
import styles from "./listReqest.module.css";
function ListRequest() {
  const requests = useSelector((state) => state.admin.changeRoleRequest);
  console.log(requests);
  return (
    <div>
      <ul className={styles.ul}>
        {requests.map(({ address, role, id_shop, statusClose }, index) => (
          <li key={index} className={styles.li}>
            <p>Request sender's address: {address}</p>
            <p>Desired Role: {role == 1 ? "seller" : "buyer"}</p>
            <p>{id_shop >= 0 ? `Desired store: ${id_shop}` : null}</p>
            <p>Close:{statusClose ? " close " : " not close"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListRequest;
