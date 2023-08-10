import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { loginThunk } from "../../../models/auth/authSlice";
import { getShopsThunk, getRequestThunk } from "../../../models/adminF/adminSlice";
import { getHistoryThunk } from "../../../models/users";

function SignIn() {
  let Login = React.useRef();
  let Password = React.useRef();
  const dispatch = useDispatch();
  const id_shop = useSelector(state=>state.auth.id_shop)

  return (
    <div className="sing_in">
      <p>Sing In</p>
      <input className="sing_in_address" placeholder="Address" ref={Login} list="accountsDatalist"/>
      <input
        className="sing_in_password"
        placeholder="Password"
        ref={Password}
      />

      <button
        className="sing_in_btn"
        onClick={() => {
          dispatch(
            loginThunk({
              address: Login.current.value,
              password: Password.current.value,
            })
          );
          console.log(loginThunk);
          dispatch(getShopsThunk({ address: Login.current.value }));
          dispatch(getRequestThunk({ address: Login.current.value }));
          dispatch(getHistoryThunk({user:Login.current.value}))
          console.log("Перед получением данных",id_shop)

        }}
      >
        sing in
      </button>
      <p>0x9aE7e0DD4819b7A7650c7a3d732F4fdfaA31f9a1</p>
      <p>admin1</p>
      {/* <p>0x267A842a4Dc97fbae4aC85228143a3DAfAFf52c0</p>
      <p>admin1</p>
      <p>0x25c66e1996002e7ff0f6F26401853FD24F6424f4</p>
      <p>user2</p> */}
    </div>
  );
}

export default SignIn;
