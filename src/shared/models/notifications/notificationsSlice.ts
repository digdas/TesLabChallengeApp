import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Notification } from "./notification";
import getNotifications from "@services/notifications/getNotifications";

type NotificationsSlice = {
  notifications: Array<Notification>;
  success: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: NotificationsSlice = {
  notifications: [],
  success: false,
  loading: false,
  error: null,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await getNotifications();
    return response.notifications;
  },
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
