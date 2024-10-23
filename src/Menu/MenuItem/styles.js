import styled from "styled-components";
import { Link } from "react-router-dom";
import { tokens } from "../Tokens/tokens";

const StyledMenuItem = styled.div`
  display: block;
  text-decoration: none;

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme, $disabled }) => {
      if (!$disabled) {
        return (
          theme?.menu?.item?.background?.hover || tokens.item.background.hover
        );
      }
    }};
  }
`;

export { StyledMenuItem };
