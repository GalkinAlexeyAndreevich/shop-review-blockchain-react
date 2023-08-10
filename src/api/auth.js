import { contractInstance, web3 } from "./network";

/**
 *
 * @param {string} address
 * @param {string} password
 * @returns {Promise<boolean>} is login
 */
export const login = (address, password) => {
  return contractInstance.methods.signIn(web3.utils.keccak256(password)).call({
    from: address,
  })
  .catch((error)=>{
    console.log(error)
  })
};

/**
 *
 * @param {string} address
 * @param {string} password
 * @returns {Promise<void>}
 */
export const registration = (address, password) => {
  return contractInstance.methods
    .registration(web3.utils.keccak256(password))
    .send({
      from: address,
    })
    .catch((error)=>{
      console.log(error)
    })
};
