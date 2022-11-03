import { createSlice } from "@reduxjs/toolkit";

const initialState={
  userData: {},
  token : null,
  isLogin : localStorage.getItem("token")

}

export const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    afterLogi(state,action){
      localStorage.setItem("userData", JSON.stringify(state.userData));
      localStorage.setItem("token", state.token);
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      state.isLogin = action.payload.token ?? null;
      
    },

    logout(state){
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      state.userData = {};
      state.token = null;
      
    }
  }
})

export const {afterLogin, logout} = AuthSlice.actions;

export default AuthSlice.reducer