import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 80%;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSizes.big};
`;
