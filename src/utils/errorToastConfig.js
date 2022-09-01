import { ErrorToast } from "react-native-toast-message";

const errorToastStyle = {
  borderLeftColor: "#ffffff",
};

const errorToastTextStyle = {
  fontFamily: "Lato_400Regular",
  fontWeight: "400",
  color: "#F44336",
  fontSize: 16,
};

export const errorToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      style={errorToastStyle}
      text1Style={errorToastTextStyle}
    />
  ),
};
