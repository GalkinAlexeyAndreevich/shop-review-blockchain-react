import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, usersApi } from "../../api";
import {getReviewsThunk} from "../../models/users"

/**
 * @type {{
 * currentAccount: string;
 * balance: number;
 * isLogin: boolean;
 * role: 0 | 1 | 2 | 4;
 * currentRole: 0 | 1 | 2 | 4;
 * }}
 */
const initialState = {
  currentAccount: "0x0000000000000000000000000000000000000000",
  balance: 0,
  isLogin: false,
  role: 4,
  currentRole: 4,
  id_shop:-1,
  // fulUser:{}
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInfo(state, { payload }) {
      const { currentRole, role, currentAccount,id_shop } = payload;
      state.isLogin = true;
      state.currentAccount = currentAccount;
      state.currentRole = currentRole;
      state.role = role;
      state.id_shop = id_shop
    },
    // setFulUser(state, { payload }) {
    //   const { user} = payload;
    //   state.fulUser = user;
    // },
    logout(state) {
      Object.assign(state, initialState);
    },
    setCurrentRole(state,{payload}){
      const {currentRole} = payload
      state.currentRole = currentRole
    },
    exit(state){
      console.log("Вы вышли")
      state.isLogin = false;
    },
  },
});



export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ address, password }, { dispatch }) => {
    console.log(address)
    const response = await authApi.login(address, password);
    if (response) {
      
      const user = await usersApi.getOne(address);
      // dispatch(slice.actions.setFulUser({user:user}))
      dispatch(getReviewsThunk({ id_shop: user.id_shop }))
      dispatch(
        slice.actions.setInfo({
          currentAccount: address,
          currentRole: user.currentRole,
          role: user.role,
          id_shop:user.id_shop
        })
      );
    }
  }
);

export const registrationThunk = createAsyncThunk(
  "auth/registration",
  async ({ address, password }, { dispatch }) => {
    console.log(address)
    const response = await authApi.registration(address, password);
    if (response) {
      alert("you had been registrated");
    }
  }
);

export const switchRoleThunk = createAsyncThunk(
  "admin/switchRole",
  async ({ address }, { dispatch }) => {
    console.log(address)
    const response = await usersApi.switchRole(address);
    if (response) {
      console.log("admin model");
      const user = await usersApi.getOne(address);
      console.log(user)
      dispatch(
        slice.actions.setCurrentRole({currentRole:user.currentRole})
      );
    }
    else{
      console.log("error switch role")
    }
  }
);



export const { reducer: authReducer } = slice;
export const { actions: authActions } = slice;
