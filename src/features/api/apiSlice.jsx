import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "RestaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["restaurants", "restaurant"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "/restaurants",
      }),
      providesTags: ["restaurants"],
    }),
    getRestaurantById: builder.query({
      query: (id) => ({
        url: `/restaurants/${id}`,
      }),
      providesTags: ["restaurant"],
    }),
  }),
});

export const {
 useGetRestaurantsQuery,
 useGetRestaurantByIdQuery
 
} = apiSlice;
