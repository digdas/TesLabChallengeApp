// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "shared/models/notifications/notificationsSlice";
import userSlice from "shared/models/user/userSlice";

export const store = configureStore({
  reducer: {
    notifications: notificationsSlice,
    user: userSlice,
  },
});
