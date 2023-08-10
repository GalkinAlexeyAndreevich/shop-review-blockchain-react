import { web3 } from "./network"
export const getAccounts = async()=>{
    let accounts = await web3.eth.personal.getAccounts()
    console.log(accounts)
    return accounts
}

export const newAccount = async()=>{
    return await web3.eth.personal.newAccount()
    .then(alert)
}
export const unlockAccounts = async()=>{
    const accounts = await getAccounts()
    for(let item of accounts){
        await web3.eth.personal.unlockAccount(item,"",0)
    }
    alert("Аккаунты разблокированы")
}