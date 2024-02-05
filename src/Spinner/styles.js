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
  border-color: ${({ $transparent, theme }) =>
    $transparent === true
      ? theme?.color?.stroke?.spinner?.transparent ||
        inube.color.stroke.spinner.transparent
      : theme?.color?.stroke?.spinner?.regular ||
        inube.color.stroke.spinner.regular};
  border-bottom-color: ${({ $appearance, theme }) =>
    $appearance &&
    (theme?.color?.stroke?.[$appearance]?.regular ||
      inube?.color?.stroke?.[$appearance]?.regular)};
  border-radius: 50%;
  ${({ $size }) => $size && sizes[$size]}
  box-sizing: border-box;
`;