import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const Title = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin: 0 12px 0 2px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const SelectList = styled(Select)`
  & .react-select__control {
    width: 250px;
    border-radius: 0;
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  & .react-select__menu {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-style: italic;
`;
