import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

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
      inube.menu.item.background.disabled)};

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme }) =>
      theme?.menu?.item?.background?.hover || inube.menu.item.background.hover};
  }
`;

export { StyledMenuItemContainer };
