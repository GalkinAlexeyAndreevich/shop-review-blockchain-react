import React from "react";
import {createShopThunk} from "../../../models/adminF"
import {useSelector,useDispatch} from "react-redux"

function CreateShop(){
  let shopAddress = React.useRef();
  let city = React.useRef();
  let account = useSelector(state => state.auth.currentAccount)
  const dispatch = useDispatch()

    return (
      <div className="CreateShop">
        <p>Create Shop</p>
        <input
          className="CreateShop_address"
          placeholder="Address"
          ref={shopAddress}
          list="accountsDatalist"
        />
        <input className="CreateShop_city" placeholder="City" ref={city} />
        <button
          className="CreateShop_btn"
          onClick={() => {
            console.log("create shop")
            dispatch(
              createShopThunk({shopAddress:shopAddress.current.value, city:city.current.value, address:account})
            )
            
          }}
        >
          Create Shop
        </button>
      </div>
    );
}

export default CreateShop;
