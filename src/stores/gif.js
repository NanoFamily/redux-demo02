import { createSlice } from "@reduxjs/toolkit";
import gifApi from "../api/gif";

const initialState = {
  url: "",
  loading: false,
  error: false
};

const slice = createSlice({
  name: "gif",
  initialState,
  reducers: {
    fetchStart: state => {
      return Object.assign({}, state, { url: "", loading: true });
    },
    fetchSucceed: (state, action) => {
      return Object.assign({}, state, { url: action.payload, loading: false });
    },
    fetchFaild: (state, action) => {
      console.error(action.payload);
      return Object.assign({}, state, { loading: false, error: true });
    },
    clear: () => {
      return { url: "", loading: false, error: false };
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { clear } = slice.actions;

// Async task
export function fetchAsync() {
  return async function(dispatch) {
    dispatch(slice.actions.fetchStart());

    try {
      const response = await gifApi.random();
      dispatch(slice.actions.fetchSucceed(response.url));
    } catch (err) {
      dispatch(slice.actions.fetchFaild(err));
    }
  };
}
