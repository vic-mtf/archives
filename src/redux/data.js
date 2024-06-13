import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";
import deepMerge from "../utils/deepMerge";

const data = createSlice({
  name: "data",
  initialState: {
    loaded: false,
    docs: [],
    dialog: {
      openDownloadFile: false,
      // openDeleteFile: false,
    },
    navigation: {
      openLeft: true,
      openRight: false,
      archiveManagement: {
        selectedElements: [],
      },
    },
  },
  reducers: {
    updateData(state, actions) {
      const { data } = actions.payload;
      const states = deepMerge(state, data);
      console.log(states);
      Object.keys(states).forEach((key) => {
        state[key] = states[key];
      });
    },
    removeData(state, actions) {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    },
  },
});

export const { updateData, removeData } = data.actions;
export default persistReducer(
  {
    storage,
    key: "__ROOT_GEID_DATA_ARCHIVES_APP",
  },
  data.reducer
);
