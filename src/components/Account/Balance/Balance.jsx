import React from "react";
import {web3} from "../../../api/network"

function Balance({account}){
    const [balance, setBalance] = React.useState();
    React.useEffect(() => {
        async function getAccountBalance() {
            if(account){
                const balance = await web3.eth.getBalance(account);
                const ethBalance = web3.utils.fromWei(balance, "ether");
                setBalance(ethBalance);
            }
		}
		getAccountBalance();
    }, [account]);
    
    return(
        <div>
            <p>Balance: {balance} eth</p>
        </div>
    );
}

export default Balance;