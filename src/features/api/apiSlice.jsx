import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "RestaurantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["restaurants", "restaurant", "order", "reviews"],
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
    addOrder: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/order",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: () => ({
        url: "/reviews",
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const {
 useGetRestaurantsQuery,
 useGetRestaurantByIdQuery,
 useAddOrderMutation,
 useAddReviewMutation,
 useGetReviewQuery
 
} = apiSlice;
