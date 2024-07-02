import React, { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import { useTheme } from "@react-navigation/native";
import T from "shared/localization";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { SCREENS } from "@shared-constants";
import createStyles from "./HomeScreen.style";
import CardItem from "./components/card-item/CardItem";
import MockData from "./mock/MockData";

const userName = 'User';

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderList = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={MockData}
        renderItem={({ item }) => (
          <CardItem data={item} onPress={handleItemPress} />
        )}
      />
    </View>
  );

  const renderWelcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        {`${T.hello}, ${userName}`}
      </Text>
      <Text
        color={colors.placeholder}
      >
        {T.welcomeBack}
      </Text>
    </>
  );

  const renderContent = () => (
    <View style={styles.contentContainer}>
      {renderWelcome()}
      {renderList()}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default HomeScreen;
