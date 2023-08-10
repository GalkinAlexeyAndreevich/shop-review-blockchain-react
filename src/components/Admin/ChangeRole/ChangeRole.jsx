import React from "react";
import { useSelector } from "react-redux";
import { changeRole } from "../../../api/admin";


export default function ChangeRole() {
  let AddressUser = React.useRef();
  let IdShop = React.useRef();
  let address = useSelector((state) => state.auth.currentAccount);
  return (
    <div>
      <p>Change role without asking</p>
      <input placeholder="Address user" ref={AddressUser} list="accountsDatalist" />
      <input placeholder="Id shop" ref={IdShop} />
      <button
        onClick={() => {
          changeRole(AddressUser.current.value, IdShop.current.value, address);
        }}
      >
        Change
      </button>
    </div>
  );
}
