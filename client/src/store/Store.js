import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthService from "./services/AuthService";
import authReducer from "./reducers/authReducer";

const Store = configureStore({
  reducer: {
    [AuthService.reducerPath]: AuthService.reducer,
    "authReducer": authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthService.middleware),
});

setupListeners(Store.dispatch);

export default Store;
