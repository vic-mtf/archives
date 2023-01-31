import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";

const data = createSlice({
    name: 'data',
    initialState: {
        isAllData: false
    },
    reducers: {
        addData(state, actions) {
            const { key, data } = actions.payload;
            state[key] = data;
            if(state.elements) state.isAllData = true;
        }
    }
});

export const { addData } = data.actions;
export default persistReducer({
    storage,
    key:'__ROOT_GEID_DATA_ARCHIVES_APP'
}, 
data.reducer
);