import React from "react";
import { changeRoleOnRequestThunk } from "../../../models/adminF";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Changerolewasking.module.css"; 

export default function Changerolewasking() {
  let id_request = React.useRef();
  let status = React.useRef();
  const dispatch = useDispatch();
  let address = useSelector((state) => state.auth.currentAccount);
  return (
    <div>
      <p>Change role on request</p>
      <input placeholder="id request" ref={id_request} />
      <input
        className={styles.custom_checkbox}
        type="checkbox"
        placeholder="Are you accept?"
        ref={status}
      />
      <button
        onClick={() => {
          dispatch(
            changeRoleOnRequestThunk({
              id_request: id_request.current.value,
              answer: status.current.checked,
              address: address,
            })
          );
        }}
      >
        Change
      </button>
    </div>
  );
}

// export default Changerolewasking;
