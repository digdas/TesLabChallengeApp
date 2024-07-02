import React, { useMemo, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
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

const userName = "User";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const { isSuccess, isLoading, data, isError, error } = useQuery({
    queryKey: ["getEventList"],
    refetchInterval: 30000,
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
