import styled from "styled-components";

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;

  > figure {
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledUser };
