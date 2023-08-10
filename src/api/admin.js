import { contractInstance } from "./network";

export const addAdmin = async (user, admin) => {
  return await contractInstance.methods
    .addAdmin(user)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const createShop = async (shopAddress, city, admin) => {
  console.log("Create shop begin");
  return await contractInstance.methods
    .createNewShop(shopAddress, city)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error.message);
    });
};

export const deleteShop = async (id_shop, admin) => {
  console.log(id_shop, admin);
  return await contractInstance.methods
    .DeleteShop(id_shop)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const changeRole = async (AddressUser, Idshop, admin) => {
  return await contractInstance.methods
    .changeRole(AddressUser, Idshop)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const changeRoleOnRequest = async (id_request, answer, admin) => {
  return await contractInstance.methods
    .ChangeRoleOnRequest(id_request, answer)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getShops = async () => {
  console.log("Получаем магазины");
  return await contractInstance.methods.getShops().call();
};

export const getRequestsChangeRole = async () => {
  console.log(1);
  return await contractInstance.methods.getRequests().call();
};

export const getShop = async (id_shop) => {
  return await contractInstance.methods.shops(id_shop).call();
};
export const getWorkersShop = async (id_shop) => {
  return await contractInstance.methods.getWorkersShop(id_shop).call();
};

