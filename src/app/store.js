import { configureStore } from '@reduxjs/toolkit';
import { CryptoApi } from '../services/CryptoApi';
import { CryptoNewsApi } from '../services/CryptoNewsApi';
import { CryptoDetailsApi } from '../services/CryptoDetailsApi';
import { CryptoExchanges } from '../services/CryptoExchanges';

export default configureStore({
    reducer: {
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
        [CryptoDetailsApi.reducerPath]: CryptoDetailsApi.reducer,
        [CryptoExchanges.reducerPath]: CryptoExchanges.reducer
    },
});