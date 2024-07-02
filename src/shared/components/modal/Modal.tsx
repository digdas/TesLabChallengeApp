/**
 * ? Local Imports
 */
import React, { useMemo } from "react";
import { View, Modal } from "react-native";
import createStyles from "./Modal.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";

interface IEventDetailScreenProps {
  closeButtonText: string;
  title: string;
  modalVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const EventDetailsModal: React.FC<IEventDetailScreenProps> = (props) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { children, title, closeButtonText, modalVisible, closeModal } = props;

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View style={styles.container}>
        <Text h1 color={colors.text}>
          {title}
        </Text>
        <View style={styles.container}>{children}</View>
        <RNBounceable style={styles.buttonStyle} onPress={closeModal}>
          <Text color={colors.white}>{closeButtonText}</Text>
        </RNBounceable>
      </View>
    </Modal>
  );
};

export default EventDetailsModal;
