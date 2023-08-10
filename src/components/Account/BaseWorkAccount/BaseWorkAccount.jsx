import React from "react";
import Balance from "../Balance";
import { switchRoleThunk } from "../../../models/auth/authSlice";
import { authActions } from "../../../models/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./BaseWorkAccount.module.css";

function BaseWorkAccount() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const currentAccount = useSelector((state) => state.auth.currentAccount);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state) => state.auth.role);
  const currentRole = useSelector((state) => state.auth.currentRole);

  if (isLogin) {
    return (
      <div>
        <div className={styles.BasePanel}>
          <div className="AccountInfo">
            <h1>Address: {currentAccount}</h1>
            <Balance account={currentAccount} />
            <p>Role: {roleName(role)}</p>
            <p>Current role: {roleName(currentRole)}</p>
            <div>
              {Number(role) === 2 || Number(role) === 1 ? (
                <button
                  onClick={() => {
                    console.log("click", currentAccount);
                    console.log(switchRoleThunk);
                    dispatch(switchRoleThunk({ address: currentAccount }));
                  }}
                >
                  Switch Role
                </button>
              ) : null}
            </div>
          </div>
          <div className={styles.Exit}>
            <button
              onClick={() => {
                navigate("/");
                dispatch(authActions.exit());
                // console.log(exit)
              }}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
  else{
    navigate("/");
  }
}

function roleName(id_role) {
  switch (String(id_role)) {
    case "0":
      return "buyer";
    case "1":
      return "seller";
    case "2":
      return "admin";
    case "4":
      return "ne doshel";
    default:
      return "oops error";
  }
}

export default BaseWorkAccount;
