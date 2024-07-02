import { createSlice } from "@reduxjs/toolkit";
import { User } from "./user";

type UserSlice = Pick<User, "name" | "email">;

const initialState: UserSlice = {
  name: "Иван",
  email: "ivan@mail.ru",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
