import styled from "styled-components";
import { Link } from "react-router-dom";
import { tokens } from "../../Menu/Tokens/tokens";

const StyledMenuItemContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  height: ${({ $spacing }) => ($spacing === "wide" ? "40px" : "36px")};
  padding: ${({ $spacing }) => ($spacing === "wide" ? "8px 16px" : "4px 16px")};
  background-color: ${({ $disabled, theme }) =>
    $disabled &&
    (theme?.menu?.item?.background?.disabled ||
      tokens.item.background.disabled)};

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme }) =>
      theme?.menu?.item?.background?.hover || tokens.item.background.hover};
  }
`;

export { StyledMenuItemContainer };
