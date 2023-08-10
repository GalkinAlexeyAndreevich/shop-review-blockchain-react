import { contractInstance } from "./network";
/**
 * @param {string} address
 * @returns {Promise<object>}
 */

export const getOne = async (address) => {
  return contractInstance.methods.users(address).call();
};

export const switchRole = async (user) => {
  return await contractInstance.methods
    .switchRole()
    .send({
      from: user,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const createReview = async ( address, id_shop, stars, comment) => {
  return await contractInstance.methods
    .createRewiev(id_shop, stars, comment)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const createComment = async ( address, id_shop, id_review, comment) => {
  return await contractInstance.methods
    .CommentRewiev(id_shop, id_review, comment)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const leaveLikeDislikeOnRewiev = async ( address, id_shop, id_review, rate) => {
  return await contractInstance.methods
    .LeaveLikeDislikeOnRewiev(id_shop, id_review, rate)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const leaveLikeDislikeOnComment = async ( address, id_shop, id_review,id_comment, rate) => {
  console.log(1,address, id_shop, id_review,id_comment, rate)
  return await contractInstance.methods
    .LeaveLikeDislikeOnComment(id_shop, id_review,id_comment, rate)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const requestRoleChange = async (role, Idshop, address) => {
  console.log(role, Idshop, address);
  return await contractInstance.methods
    .RequestRoleChange(role, Idshop)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const addHistory = async (history,user) => {
  console.log(history,user);
  return await contractInstance.methods
    .addHistory(history,user)
    .send({
      from: user,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getReviewOnShop = async(id_shop) =>{
  console.log(id_shop);
  return await contractInstance.methods
    .getRewievsShop(id_shop)
    .call()
    .catch(function (error) {
      console.log(error);
    });
}


export const getCommentsOnReview = async(id_shop,id_review) =>{
  console.log(id_shop);
  return await contractInstance.methods
    .getCommentsOnRewiev(id_shop,id_review)
    .call()
    .catch(function (error) {
      console.log(error);
    });
}

export const getHistory = async(user) =>{
  console.log(user);
  return await contractInstance.methods
    .getHistory(user)
    .call()
    .catch(function (error) {
      console.log(error);
    });
}
