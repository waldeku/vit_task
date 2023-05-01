import { SingleValue } from "react-select";
import { useQuery } from "react-query";

import SelectionPanel from "components/SelectionPanel/SelectionPanel";
import { Option, CompanyDataItemDTO } from "types";

import { Wrapper } from "./Header.styled";

interface HeaderProps {
  onCompanyChange: (selection: SingleValue<Option>) => void;
}

const Header = ({ onCompanyChange }: HeaderProps) => {
  const { data, status } = useQuery<CompanyDataItemDTO>("getDataSources", () =>
    fetch(
      "https://data.nasdaq.com/api/v3/datasets/?database_code=WIKI&api_key=emaq5WSiRtyDVbivWTsu"
    ).then((res) => res.json())
  );

  const listOfCodes = data?.datasets?.map((item) => ({
    label: item.dataset_code,
    value: item.dataset_code,
  }));

  return (
    <Wrapper>
      <SelectionPanel
        title="Company"
        options={listOfCodes || []}
        onChange={(selection: SingleValue<Option>) =>
          onCompanyChange(selection)
        }
        isLoading={status === "loading"}
        isError={status === "error"}
      />
    </Wrapper>
  );
};

export default Header;
