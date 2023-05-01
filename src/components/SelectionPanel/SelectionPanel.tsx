import React from "react";
import { SingleValue, PropsValue, createFilter } from "react-select";

import { Option } from "types";

import {
  Icon,
  Info,
  SelectList,
  Wrapper,
  TitleWrapper,
  Title,
} from "./SelectionPanel.styled";

interface SelectionPanelProps {
  title: string;
  options: Option[];
  value?: PropsValue<Option>;
  onChange: (selection: SingleValue<Option>) => void;
  isLoading: boolean;
  isError: boolean;
}

const SelectionPanel = ({
  title,
  value,
  onChange,
  options,
  isLoading,
  isError,
}: SelectionPanelProps) => {
  const getInfoText = () =>
    isError
      ? "Error when fetching data sources, please try again."
      : "Data is loading, please wait...";

  return (
    <Wrapper>
      <TitleWrapper>
        <Icon icon="building" />
        <Title htmlFor="select-data-source">{title}</Title>
      </TitleWrapper>
      <SelectList
        id="select-data-source"
        classNamePrefix="react-select"
        options={options}
        isLoading={isLoading}
        onChange={(newValue) => onChange(newValue as SingleValue<Option>)}
        value={value}
        filterOption={createFilter({ ignoreAccents: false })}
        placeholder="Select data source"
        isClearable={true}
        isSearchable={true}
      />
      {isLoading || isError ? <Info>{getInfoText()}</Info> : null}
    </Wrapper>
  );
};

export default SelectionPanel;
