import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//createApi is a wrapper function
const AuthService = createApi({
  reducerPath: "auth", //unique key
  baseQuery: fetchBaseQuery({
    //backend server url
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => {
    return {
      //mutation for POST and PUT method, query for GET method
      authLogin: builder.mutation({
        query: (LoginData) => {
          return {
            url: "login", //backend url
            method: "POST",
            body: LoginData,
          };
        },
      }),
    };
  },
});

export const { useAuthLoginMutation } = AuthService;
export default AuthService;
