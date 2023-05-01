import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 12px;
  border: ${({ theme }) => `1px solid ${theme.colors.grays[1]}`};
`;
