import { configureStore } from '@reduxjs/toolkit';
import { CryptoApi } from '../services/CryptoApi';
import { CryptoNewsApi } from '../services/CryptoNewsApi';
import { CryptoDetailsApi } from '../services/CryptoDetailsApi';

export default configureStore({
    reducer: {
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]: CryptoNewsApi.reducer,
        [CryptoDetailsApi.reducerPath]: CryptoDetailsApi.reducer,
    },
});