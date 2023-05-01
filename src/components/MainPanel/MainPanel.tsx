import Title from "components/Title";
import CompanyChart from "components/CompanyChart";
import { Option } from "types";

import { Wrapper } from "./MainPanel.styled";

interface MainPanelProps {
  selectedCompany: Option | null;
}

const MainPanel = ({ selectedCompany }: MainPanelProps) => {
  return (
    <Wrapper>
      <>
        {!selectedCompany ? (
          <Title
            text={"To get the company data chart please make your selection."}
          />
        ) : (
          <CompanyChart selectedCompany={selectedCompany} />
        )}
      </>
    </Wrapper>
  );
};

export default MainPanel;
