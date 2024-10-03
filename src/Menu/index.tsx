import { StyledMenuContainer } from "./styles";

interface IMenu {
  children: React.ReactNode;
}

function Menu(props: IMenu) {
  const { children } = props;

  return <StyledMenuContainer>{children}</StyledMenuContainer>;
}

export { Menu };
export type { IMenu };
