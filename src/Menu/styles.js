import { tokens } from "./Tokens/tokens";
import styled from "styled-components";

const StyledMenuContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 312px;
  box-shadow: 0px 2px 3px 0px #091e4221;
  box-shadow: 0px 6px 10px 4px #091e4221;
  background-color: ${({ theme }) =>
    theme?.menu?.background?.color || tokens.background.color};
`;

export { StyledMenuContainer };
