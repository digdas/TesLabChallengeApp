import React, { useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Notification } from "shared/models/notifications";
import createStyles from "./NotificationItem.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IEventItemProps {
  style?: CustomStyleProp;
  data: Notification;
}

const EventItem: React.FC<IEventItemProps> = ({ style, data }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { text, date } = data;

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderHeader = () => (
    <>
      <Text h4 bold color={colors.text}>
        {date.toLocaleString()}
      </Text>
    </>
  );

  const renderText = () => (
    <View style={styles.dateContainer}>
      <Text style={styles.valueTextStyle}>{text}</Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]}>
      {renderHeader()}
      <View style={styles.contentContainer}>{renderText()}</View>
    </RNBounceable>
  );
};

export default EventItem;
