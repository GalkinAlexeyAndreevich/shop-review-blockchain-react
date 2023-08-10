import React from "react";
// import styles from"./App.module.css";
import FormsInAccount from "../components/FormsInAccount";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {accountApi} from "../api"
import AccountDatalist from "../components/AccountDatalist";
function newAccount(){
  let answer = window.confirm("Вы точно хотите создать новый аккаунт?")
  if(!answer){
    return
  }
  accountApi.newAccount()
}
function App() {
  const [unlock,setUnlock] = React.useState(false)
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin);
  return (
    <BrowserRouter>
      <div className="App">
        <AccountDatalist />
        <button onClick={newAccount}>Новый аккаунт</button>
        {!unlock?<button onClick={()=>{
          accountApi.unlockAccounts()
          setUnlock(true)
        }}>Разблокировать</button>:null}
      {isLogin?<Account />:<FormsInAccount />}
      </div>
    </BrowserRouter>
  );
}

export default App;
