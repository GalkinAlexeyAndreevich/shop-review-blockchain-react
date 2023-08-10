import React from "react";
import {deleteShopThunk} from "../../../models/adminF"
import { useSelector,useDispatch} from "react-redux";

export default function DeleteShop() {
  let id_shop = React.useRef();
  const dispatch = useDispatch()
  let address = useSelector(state => state.auth.currentAccount)
    return (
      <div>
        <p>Delete Shop</p>
        <input placeholder="id shop" ref={id_shop} />

        <button
          onClick={() => {
            console.log("delete")
            dispatch(deleteShopThunk({id_shop:id_shop.current.value, address:address}))
          }}
        >
          Delete
        </button>
      </div>
    );
}
