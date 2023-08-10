import { contractInstance } from "./network.js";
/**
 *
 * @param {string} address
 * @returns {Promise<void>}
 */
export const switchRole = async (address) => {
  console.log(address);
  let res = await contractInstance.methods
    .switchRole()
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}
