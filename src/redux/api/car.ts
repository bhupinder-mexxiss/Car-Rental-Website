import { ApiResponse } from "../../Types/ApiResponse";
import { baseApi } from "../baseApi";
import { CAR_ADD } from "../routes/routes";

export const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCar: builder.mutation({
            query: (data) => ({
                url: CAR_ADD,
                method: 'POST',
                body: data
            }),
            transformResponse: (response: ApiResponse) => response.data
        }),
    }),
});

export const { useAddCarMutation } = carApi;