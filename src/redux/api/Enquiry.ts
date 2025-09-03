import { ApiResponse } from "../../Types/ApiResponse";
import { baseApi } from "../baseApi";
import { ENQUIRIES_GET, ENQUIRY_ADD, ENQUIRY_RESPONSE } from "../routes/routes";

export const enquiryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addEnquiry: builder.mutation({
            query: (data) => ({
                url: ENQUIRY_ADD,
                method: "POST",
                body: data
            }),
            transformResponse: (response: ApiResponse) => response.data,
        }),
        getEnquiries: builder.query({
            query: ({ type }) => ENQUIRIES_GET(type),
            transformResponse: (response: ApiResponse) => response.data,
        }),
        respondToEnquiry: builder.mutation({
            query: (data) => ({
                url: ENQUIRY_RESPONSE,
                method: "POST",
                body: data
            }),
            transformResponse: (response: ApiResponse) => response.data,
        })
    })
})
export const { useAddEnquiryMutation, useGetEnquiriesQuery, useRespondToEnquiryMutation } = enquiryApi;