import React, { useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./EventItem.style";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Event } from "shared/models";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IEventItemProps {
  style?: CustomStyleProp;
  data: Event;
  onPress: () => void;
}

const EventItem: React.FC<IEventItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, date } = data;

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderHeader = () => (
    <>
      <Text h4 bold color={colors.text}>
        {name}
      </Text>
    </>
  );

  const renderDate = () => (
    <View style={styles.dateContainer}>
      <View style={styles.dateColorStyle} />
      <Text style={styles.valueTextStyle}>{date.toLocaleString()}</Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      {renderHeader()}
      <View style={styles.contentContainer}>{renderDate()}</View>
    </RNBounceable>
  );
};

export default EventItem;
