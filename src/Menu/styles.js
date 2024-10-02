import { tokens } from "./Tokens/tokens";
import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledMenuContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 312px;
  box-shadow: 0px 2px 3px 0px
    ${({ theme }) =>
      theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
  box-shadow: 0px 6px 10px 4px
    ${({ theme }) =>
      theme?.palette?.neutralAlpha?.N40A || inube.palette.neutralAlpha.N40A};
  background-color: ${({ theme }) =>
    theme?.menu?.background?.color || tokens.background.color};
`;

export { StyledMenuContainer };
