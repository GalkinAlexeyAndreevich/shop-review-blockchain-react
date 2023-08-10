import React from "react";
import { usersApi } from "../../../api";
import { useSelector} from "react-redux";

export default function RequestRoleChange() {
  let role = React.useRef();
  let Idshop = React.useRef();
  let address = useSelector((state) => state.auth.currentAccount);

  return (
    <div>
      <p>Request Role Change</p>
      <input placeholder="role" ref={role} />
      <input placeholder="Id shop" ref={Idshop} />
      <button
        onClick={() => {
          console.log(role.current.value, Idshop.current.value, address);
          usersApi.requestRoleChange(
            role.current.value,
            Idshop.current.value,
            address
          );
        }}
      >
        Create Request
      </button>
    </div>
  );
}
