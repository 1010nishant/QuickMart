import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//createApi is a wrapper function
const CategoryService = createApi({
    reducerPath: "category", //unique key
    baseQuery: fetchBaseQuery({
        //backend server url
        baseUrl: "http://localhost:5000/api/",
    }),
    endpoints: (builder) => {
        return {
            //mutation for POST and PUT method, query for GET method
            create: builder.mutation({
                query: (name) => {
                    return {
                        url: "create-category", //backend url
                        method: "POST",
                        body: name,
                    };
                },
            }),
        };
    },
});

export const { useCreateMutation } = CategoryService;
export default CategoryService;
