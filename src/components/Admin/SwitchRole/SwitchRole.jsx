import React from "react";
import { web3, contractInstance } from "../../network";
import { useDispatch, useSelector } from "react-redux";

function ChangeRole() {
  const dispatch = useDispatch();
  const Login = useSelector((state) => state.auth.currentAccount);
  async function Change() {
    let res = await contractInstance.methods
      .switchRole()
      .send({
        from: Login,
        gas: 3000000,
      })
      .catch(function (error) {
        console.log(error);
      });
    if (res) {
      console.log(res);
      let userInfo = await contractInstance.methods.users(Login).call();
      dispatch({ type: "SetCurRole", payload: userInfo.currentRole });
    }
  }

  return (
    <button
      onClick={() => {
        Change();
      }}
    >
      Change role
    </button>
  );
}

export default ChangeRole;
