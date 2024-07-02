import React, { useMemo } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import TextWithLabel from "@shared-components/text-with-label/TextWithLabel";
import T from "shared/localization";
import { User } from "shared/models/user";
import createStyles from "./ProfileScreen.style";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { name, email } = useSelector<any, User>((state) => state.user);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        {T.aboutU}
      </Text>
      <TextWithLabel h2 label={T.name} text={name} />
      <TextWithLabel h2 label={T.email} text={email} />
    </View>
  );
};

export default ProfileScreen;
