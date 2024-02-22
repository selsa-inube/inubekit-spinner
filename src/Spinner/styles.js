import styled, { keyframes } from "styled-components";
import { inube } from "@inubekit/foundations";

export const sizes = {
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

export const animationspinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  animation: 0.8s linear infinite ${animationspinner};
  border: solid 4px;
  border-color: ${({ theme, $type, $appearance }) =>
    $type === "transparent"
      ? theme?.spinner?.[$appearance]?.transparent?.track?.color ||
        inube.spinner[$appearance].transparent.track.color
      : theme?.spinner?.[$appearance]?.solid?.track?.color ||
        inube.spinner[$appearance].solid.track.color};
  border-bottom-color: ${({ $appearance, $type, theme }) =>
    $appearance &&
    (theme?.spinner?.[$appearance]?.transparent?.spin?.color ||
      inube?.spinner[$appearance].solid?.spin?.color)};
  border-radius: 50%;
  ${({ $size }) => $size && sizes[$size]}
  box-sizing: border-box;
`;
