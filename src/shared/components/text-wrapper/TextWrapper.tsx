import React from "react";
import RNText from "@freakycoder/react-native-custom-text";
import type { IRNTextProps } from "@freakycoder/react-native-custom-text";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  color = "#757575",
  children,
  ...rest
}) => {
  return (
    <RNText color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
