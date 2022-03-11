import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
//   endpoints: (builder) => ({
//     getContactsByName: builder.query({
//       query: (name) => `/pokemon/${name}`,
//     }),
//   }),
// })

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://622671db2dfa524018058345.mockapi.io/' }),
  tagTypes: ["contactsDel"],
  endpoints: (builder) => ({

    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ["contactsDel"],
    }),

    createContacts: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          contacts: newContact
        },
      }),
      invalidatesTags: ["contactsDel"]
    }),

    deleteContacts: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["contactsDel"],
    }),
  }),
})

// export const { useGetContactsByNameQuery } = contactsApi

export const { useGetContactsQuery, useCreateContactsMutation, useDeleteContactsMutation } = contactsApi

//API endpoint
//https://622671db2dfa524018058345.mockapi.io/:endpoint
