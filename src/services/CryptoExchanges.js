import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '65bf16b169msh93db8009cd5bc11p14d5e0jsn15d8a408fa26'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const CryptoExchanges = createApi({
    reducerPath: 'CryptoExchanges',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges')
        })
    })

});

export const {
    useGetExchangesQuery
} = CryptoExchanges;
