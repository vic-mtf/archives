import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";
import columns from '../utils/columns';

const data = createSlice({
    name: 'data',
    initialState: {
        columns,
        isAllData: false
    },
    reducers: {
        addData(state, actions) {
            const { key, data } = actions.payload;
            state[key] = data;
            if(state.elements) state.isAllData = true;
        },
        changeVisibilityColumn(state, actions) {
            const { field, hide } = actions.payload;
            state.columns = state.columns.map(
                col => col?.field === field ? ({...col, hide}) : col
            )
        }
    }
});

export const { addData, changeVisibilityColumn } = data.actions;
export default persistReducer({
    storage,
    key:'__ROOT_GEID_DATA_ARCHIVES_APP'
}, 
data.reducer
);