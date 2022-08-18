import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.h4};
    line-height: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse};
`;

const subTitle = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.inverse};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.button};
    color: ${theme.colors.text.disabled};

`;

const success = (theme) => `
    color: ${theme.colors.text.success};
    font-size: ${theme.fontSizes.button};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.button};
`;

const lightError = (theme) => `
    color: ${theme.colors.brand.secondary};
    font-size: ${theme.fontSizes.caption};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.disabled};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const boldLabel = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  title,
  subTitle,
  label,
  boldLabel,
  lightError,
  caption,
  success,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
