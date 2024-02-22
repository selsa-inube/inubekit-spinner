import styled, { keyframes } from "styled-components";
import { inube } from "@inubekit/foundations";

const sizes = {
  large: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "32px",
    height: "32px",
  },
  small: {
    width: "24px",
    height: "24px",
  },
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  animation: 0.8s linear infinite ${spinner};
  border: solid 4px;
  border-color: ${({ theme, $transparent }) =>
    $transparent === true
      ? theme?.spinner?.transparent?.color || inube.spinner.transparent.color
      : theme?.spinner?.regular?.color || inube.spinner.regular.color};
  border-bottom-color: ${({ $appearance, theme }) =>
    $appearance &&
    (theme?.spinner?.[$appearance]?.color ||
      inube?.spinner?.[$appearance]?.color)};
  border-radius: 50%;
  ${({ $size }) => $size && sizes[$size]}
  box-sizing: border-box;
`;
