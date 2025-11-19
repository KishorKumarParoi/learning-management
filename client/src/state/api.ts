import { Clerk } from '@clerk/clerk-js';
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@clerk/nextjs/server"
import { toast } from 'sonner';

export const customBaseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: any) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await window.Clerk?.session?.getToken()
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  });

  try {
    const result: any = await baseQuery(args, api, extraOptions);

    if (result.error) {
      const errorData = result.error.data;
      const errorMessage = errorData?.message || result.error.status.toString() || 'An unknown error occurred';
      toast.error(`Error: ${errorMessage}`);
    }

    const isMutationRequest = (args as FetchArgs).method && (args as FetchArgs).method !== 'GET';

    if (isMutationRequest && !result.error) {
      const successMessage = result.data?.message;
      if (successMessage) {
        toast.success(successMessage);
      }
    }

    if (result.data) {
      result.data = result.data.data
    } else if (
      result.error?.status === 204 || result.meta?.response?.status === 24
    ) {
      return { data: null };
    }

    return result;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('API Error:', errorMessage);
    return { error: { status: 'FETCH_ERROR', error: errorMessage } };
  }
}

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ['Courses', "Users"],

  endpoints: (build) => ({
    updateUser: build.mutation<User, Partial<User> & { userId: string }>({
      query: ({ userId, ...updatedUser }) => ({
        url: `users/clerk/${userId}`,
        method: "PUT",
        body: updatedUser
      }),
      invalidatesTags: ["Users"]
    }),
    getCourses: build.query<Course[], { category?: string }>({
      query: ({ category }) => ({
        url: "courses",
        params: { category }
      }),
      providesTags: ['Courses'],
    }),
    getCourse: build.query<Course, string>({
      query: (id) => ({
        url: `courses/${id}`
      }),
      providesTags: (result, error, id) => [{ type: 'Courses', id }],
    }),
    createStripePaymentIntent: build.mutation<{ clientSecret: string }, { amount: number }>({
      query: ({ amount }) => ({
        url: `transactions/create-payment-intent`,
        method: "POST",
        body: { amount }
      }),
      invalidatesTags: ["Users"]
    })
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery, useUpdateUserMutation, useCreateStripePaymentIntentMutation } = api