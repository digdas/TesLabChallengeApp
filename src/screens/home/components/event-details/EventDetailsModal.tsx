import { useTheme } from "@react-navigation/native";
import Modal from "@shared-components/modal/Modal";
import TextWithLabel from "@shared-components/text-with-label/TextWithLabel";
import { Event } from "shared/models";
import T from "shared/localization";

interface IEventDetailScreenProps {
  data: Event;
  modalVisible: boolean;
  closeModal: () => void;
}

const EventDetailsModal: React.FC<IEventDetailScreenProps> = (props) => {
  const theme = useTheme();
  const { colors } = theme;

  const { data, modalVisible, closeModal } = props;

  return (
    <Modal
      modalVisible={modalVisible}
      closeModal={() => closeModal()}
      title={T.eventDetails}
      closeButtonText={T.backToHome}
    >
      <TextWithLabel
        h2
        color={colors.text}
        label={"Подробное описание:"}
        text={data.description}
      />
      <TextWithLabel
        h2
        color={colors.text}
        label={"Дата:"}
        text={data.date.toLocaleString()}
      />
    </Modal>
  );
};

export default EventDetailsModal;
