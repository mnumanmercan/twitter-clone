import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "mnumanmercan",
    fullName: "Numan",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1740138671137792000/n_HtH5Uw_200x200.jpg",
  }, //o anda akfit olunan account
  accounts: [], // login olmus tüm accountları tutan array
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
