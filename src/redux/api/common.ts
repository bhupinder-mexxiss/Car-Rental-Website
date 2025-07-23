import { ApiResponse } from "../../Types/ApiResponse";
import { baseApi } from "../baseApi";
import { CONTACT_FORM, GET_BRANDS, GET_CATEGORIES, UPLOAD_MULTI, UPLOAD_SINGLE } from "../routes/routes";

export const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadSingle: builder.mutation({
            query: (formData) => ({
                url: UPLOAD_SINGLE,
                method: 'POST',
                body: formData
            }),
            transformResponse: (response: ApiResponse) => response.data
        }),
        uploadMulti: builder.mutation({
            query: (formData) => ({
                url: UPLOAD_MULTI,
                method: 'POST',
                body: formData
            }),
            transformResponse: (response: ApiResponse) => response.data
        }),
        contactForm: builder.mutation({
            query: (data) => ({
                url: CONTACT_FORM,
                method: 'POST',
                body: data
            }),
            transformResponse: (response: ApiResponse) => response.data
        }),
        getBrands: builder.query({
            query: () => GET_BRANDS,
            transformResponse: (response: ApiResponse) => response.data
        }),
        getCategories: builder.query({
            query: () => GET_CATEGORIES,
            transformResponse: (response: ApiResponse) => response.data
        })
    }),
});

export const { useUploadSingleMutation, useUploadMultiMutation, useContactFormMutation, useGetBrandsQuery, useGetCategoriesQuery } = carApi;