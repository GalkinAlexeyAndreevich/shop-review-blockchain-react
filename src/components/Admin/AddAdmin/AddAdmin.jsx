import React from "react";
import { adminApi } from "../../../api";
import { useSelector } from "react-redux";

function AddAdmin() {
  let AddressNewAdd = React.useRef();
  let address = useSelector((state) => state.auth.currentAccount);
  return (
    <div>
      <p>Add Admin</p>
      <input placeholder="Address new admin" ref={AddressNewAdd} list="accountsDatalist"/>
      <button
        onClick={() => {
          adminApi.addAdmin(AddressNewAdd.current.value, address);
        }}
      >
        Add Admin
      </button>
    </div>
  );
}

export default AddAdmin;
