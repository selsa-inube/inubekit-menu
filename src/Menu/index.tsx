import React, { forwardRef } from "react";
import { StyledMenuContainer } from "./styles";

interface IMenu {
  children: React.ReactNode;
}

const Menu = forwardRef<HTMLDivElement, IMenu>((props, ref) => {
  const { children } = props;

  return <StyledMenuContainer ref={ref}>{children}</StyledMenuContainer>;
});

export { Menu };
export type { IMenu };
