import { Size, Appearance } from "./props";
import { StyledSpinner } from "./styles";

export interface ISpinner {
  size: Size;
  appearance: Appearance;
  transparent: boolean;
}

export const Spinner = (props: ISpinner) => {
  const {
    size = "medium",
    appearance = "primary",
    transparent = false,
  } = props;

  return (
    <StyledSpinner
      $appearance={appearance}
      $size={size}
      $transparent={transparent}
    />
  );
};
