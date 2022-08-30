import { TouchableOpacity, TextInput, Dimensions } from "react-native";
import styled from "styled-components/native";

const textAreaWidth = Dimensions.get("window").width - 20;

export const CommentFormContainer = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  padding: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled(TouchableOpacity)`
  width: ${textAreaWidth}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.space[1]};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.primary};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const TextAreaContainer = styled.View`
  width: ${textAreaWidth}px;
  height: 100px;
  border-color: ${(props) => props.theme.colors.brand.primary};
  border-width: 1px;
  border-radius: ${(props) => props.theme.space[1]}; ;
`;

export const TextArea = styled(TextInput)`
  padding: 10px;
`;
