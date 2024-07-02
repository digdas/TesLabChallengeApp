import React, { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import createStyles from "./NotificationScreen.style";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { fetchNotifications } from "shared/models/notifications/notificationsSlice";
import { Notification } from "shared/models/notifications";
import T from "shared/localization";
import { NotificationItem } from "./components/notification-item";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const dispatch = useDispatch<any>();
  const notifications = useSelector<any, Array<Notification>>(
    (state) => state.notifications.notifications,
  );
  const isLoading = useSelector<any, boolean>(
    (state) => state.notifications.loading,
  );
  const isError = useSelector<any, boolean>(
    (state) => state.notifications.error,
  );
  const isSuccess = useSelector<any, boolean>(
    (state) => state.notifications.success,
  );

  // Реализация той же логики, но на redux + hooks
  // сложнее, а еще надо самому merge старых и новых данных делать
  // иначе полное обновление списка
  useEffect(() => {
    dispatch(fetchNotifications());

    const interval = setInterval(() => {
      dispatch(fetchNotifications());
    }, 30000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(fetchNotifications());
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderList = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem data={item} />}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {isSuccess && renderList()}
      {isLoading && (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      )}
      {isError && <Text>{T.loadingError}</Text>}
    </View>
  );
};

export default ProfileScreen;
