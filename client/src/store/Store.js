import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthService from "./services/AuthService";
import authReducer from "./reducers/authReducer";
import CategoryService from "./services/CategoryService";
import globalReducer from "./reducers/globalReducer";

const Store = configureStore({
  reducer: {
    [AuthService.reducerPath]: AuthService.reducer,
    [CategoryService.reducerPath]: CategoryService.reducer,
    "authReducer": authReducer,
    'globalReducer': globalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthService.middleware),
});

setupListeners(Store.dispatch);

export default Store;
