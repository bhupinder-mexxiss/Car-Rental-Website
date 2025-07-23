import { url } from "inspector";
import { ApiResponse } from "../../Types/ApiResponse";
import { baseApi } from "../baseApi";
import { PARTNER_REGISTER, USER_CHANGE_PASSWORD, USER_GET, USER_UPDATE, WISHLIST, WISHLIST_GET } from "../routes/routes";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => USER_GET,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ['USER'],
        }),
        updateProfile: builder.mutation({
            query: (body) => ({
                url: USER_UPDATE,
                method: "PATCH",
                body: body
            }),
            invalidatesTags: ['USER']
        }),
        changePassword: builder.mutation({
            query: (body) => ({
                url: USER_CHANGE_PASSWORD,
                method: "PATCH",
                body: body
            }),
        }),
        registerPartner: builder.mutation({
            query: (body) => {
                console.log(body);
                return {
                    url: PARTNER_REGISTER,
                    method: "POST",
                    body: body
                }
            }
        }),
        addWishlist: builder.mutation({
            query: (id) => ({
                url: WISHLIST(id),
                method: "POST",
            }),
            invalidatesTags: ["WISHLIST"]
        }),
        removeWishlist: builder.mutation({
            query: (id) => ({
                url: WISHLIST(id),
                method: "DELETE",
            }),
            invalidatesTags: ["WISHLIST"]
        }),
        getWishlist: builder.query({
            query: () => WISHLIST_GET,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["WISHLIST"]
        }),
    }),
});

export const { useGetMeQuery, useUpdateProfileMutation, useChangePasswordMutation, useRegisterPartnerMutation, useAddWishlistMutation, useRemoveWishlistMutation, useGetWishlistQuery } = userApi;