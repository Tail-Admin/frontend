import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse } from '../interfaces/IApi';


const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:3001/auth/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }); 


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials 
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/logout',
                method: 'POST', 
            })
        }),

        registration: builder.mutation<RegistrationResponse, RegistrationRequest>({
            query: (credentials ) => ({
                url: 'register',
                method: 'POST',
                body: credentials 
            })
        })

    })
})

export const {useLoginMutation, useLogoutMutation, useRegistrationMutation} = authApi;