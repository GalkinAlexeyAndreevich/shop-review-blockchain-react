import {accountApi} from "../api"
import React from "react"
function AccountDatalist(){
    const [accounts,setAccounts] = React.useState([])
    React.useEffect(()=>{
        async function getData(){
            setAccounts(await accountApi.getAccounts()) 
        }
        getData()
    },[])
    return(
        <div>
        {/* <input type="text" list="accountsDatalist" /> */}
        <datalist id="accountsDatalist">
            {accounts.map((item,index) => (
                <option key={index}>{item}</option>
            ))}
            
        </datalist>
        </div>

    )
}
export default AccountDatalist