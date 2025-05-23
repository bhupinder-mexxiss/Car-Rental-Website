import { ApiResponse } from "../../Types/ApiResponse";
import { baseApi } from "../baseApi";
import { USER_GET } from "../routes/routes";

export const propertyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => USER_GET,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["USER"]
        }),
    }),
});

export const { useGetMeQuery } = propertyApi;