import React, { useMemo, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import T from "shared/localization";
import Text from "@shared-components/text-wrapper/TextWrapper";
import createStyles from "./HomeScreen.style";
import { EventItem } from "./components/event-item";
import getList from "@services/events/getList";
import EventDetailsModal from "./components/event-details/EventDetailsModal";
import { Event } from "shared/models";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const userName = useSelector<any, string>((state) => state.user.name);

  // Намного лучше чем велосипед с redux, имхо
  const {
    isSuccess,
    isLoading,
    data,
    isError,
    error,
    // refetch для pull to refresh который сам сбрасывает refetchInterval
    refetch,
  } = useQuery({
    queryKey: ["getEventList"],
    // Интервал обновления данных
    refetchInterval: 30000,
    staleTime: 0,
    queryFn: () => {
      return getList();
    },
  });

  const handleItemPress = (event: Event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderList = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={data?.events}
        renderItem={({ item }) => (
          <EventItem data={item} onPress={() => handleItemPress(item)} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </View>
  );

  const renderWelcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        {`${T.hello}, ${userName}`}
      </Text>
      <Text color={colors.placeholder}>{T.welcomeBack}</Text>
    </>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>
      {renderDetailsModal()}
      {renderWelcome()}
      {isSuccess && renderList()}
      {isLoading && (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      )}
      {isError && <Text>{error.message}</Text>}
    </View>
  );

  const renderDetailsModal = () => {
    if (selectedEvent)
      return (
        <EventDetailsModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
          data={selectedEvent}
        />
      );
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>{renderContent()}</SafeAreaView>
  );
};

export default HomeScreen;
