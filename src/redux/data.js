import { createSlice } from "@reduxjs/toolkit";
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
export default data.reducer;
