// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import notificationsSlice from "shared/models/notifications/notificationsSlice";

export const store = configureStore({
  reducer: {
    notifications: notificationsSlice,
  },
});
