import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const titleBig = (theme) => `
    font-size: ${theme.fontSizes.h4};
    line-height: ${theme.fontSizes.h4};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse};
`;

const titleMedium = (theme) => `
    font-size: ${theme.fontSizes.h5};
    line-height: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.inverse};
`;

const fobbo = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.h4};
    color: ${theme.colors.text.inverse};
`;

const titleBrandMedium = (theme) => `
    font-size: ${theme.fontSizes.h5};
    line-height: ${theme.fontSizes.h5};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.brand};
`;

const titleSmall = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.inverse};
`;

const titleBlackSmall = (theme) => `
    font-size: ${theme.fontSizes.title};
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

const whiteButton = (theme) => `
    color: ${theme.colors.text.inverse};
    font-size: ${theme.fontSizes.button};
`;

const brand = (theme) => `
    color: ${theme.colors.text.brand};
    font-size: ${theme.fontSizes.body};
`;

const brandSmall = (theme) => `
    color: ${theme.colors.text.brand};
    font-size: ${theme.fontSizes.caption};
`;

const lightBrand = (theme) => `
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.caption};
`;

const caption = (theme) => `
    color: ${theme.colors.text.disabled};
    font-size: ${theme.fontSizes.caption};
`;

const captionWhite = (theme) => `
    color: ${theme.colors.text.inverse};
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const boldLabel = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  titleBig,
  titleMedium,
  titleBrandMedium,
  titleSmall,
  titleBlackSmall,
  hint,
  success,
  error,
  brand,
  brandSmall,
  lightBrand,
  fobbo,
  whiteButton,
  caption,
  captionWhite,
  label,
  boldLabel,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "titleBlackSmall",
};
