import { View } from "react-native";
import RNText from "@freakycoder/react-native-custom-text";
import type { IRNTextProps } from "@freakycoder/react-native-custom-text";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  label?: string;
  text?: string;
}

const TextWithLabel: React.FC<ITextWrapperProps> = ({
  color = "#757575",
  children,
  label,
  text,
  ...rest
}) => {
  return (
    <>
      <RNText h3 color={color} {...rest} style={{ alignSelf: "left" }}>
        {label}
      </RNText>
      <RNText h2 color={color} {...rest} style={{ alignSelf: "left" }}>
        {text}
      </RNText>
      <View
        style={{
          backgroundColor: "#909090",
          height: 1,
          marginBottom: 10,
          alignSelf: "stretch",
        }}
      />
    </>
  );
};

export default TextWithLabel;
