import React from "react";
import { useDispatch} from "react-redux";
import { registrationThunk } from "../../../models/auth";

function SignOut() {
  let Login = React.useRef();
  let Password = React.useRef();
  const dispatch = useDispatch();

  return (
    <div className="sing_out">
      <p>Sing Out</p>
      <input className="sing_out_address" placeholder="Address" ref={Login} list="accountsDatalist"/>
      <input
        className="sing_out_password"
        placeholder="Password"
        ref={Password}
      />
      <button
        className="sing_out_btn"
        onClick={() => {
          dispatch(
            registrationThunk({
              address: Login.current.value,
              password: Password.current.value,
            })
          );
        }}
      >
        sing_out
      </button>
    </div>
  );
  // }
}

export default SignOut;
