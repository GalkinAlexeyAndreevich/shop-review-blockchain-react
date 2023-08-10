import ABI from "./abi.js";
import Web3 from "web3";
/**
 * @type {import('web3-eth-contract').Contract}
 */
export let contractInstance;

/**
 * @type {import('web3').default}
 */
export let web3;

const contractAddress = "0x3b4Fb8ef59f5358b912FCF035a8D714f25DA8728";
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

contractInstance = new web3.eth.Contract(ABI, contractAddress);
