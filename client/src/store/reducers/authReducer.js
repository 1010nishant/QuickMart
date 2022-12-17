import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const adminStorage = localStorage.getItem('admin-token')
function verifyToken() {
  if (adminStorage) {
    const decodeToken = jwt_decode(adminStorage)
    const expireIn = new Date(decodeToken.exp * 1000)
    if (new Date() > expireIn) {
      localStorage.removeItem('admin-token')
      return null
    } else {
      return adminStorage
    }
  } else {
    return null
  }
}
const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: verifyToken()
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload
    },

    logout: (state) => {
      localStorage.removeItem('admin-token')
      state.adminToken = null
    }
  }
});

export const { setAdminToken, logout } = authReducer.actions
export default authReducer.reducer