import React, { useState } from "react";

import Header from "components/Header";
import MainPanel from "components/MainPanel";
import { Option } from "types";

import { Wrapper } from "./Dashboard.styled";

const Dashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState<Option | null>(null);

  return (
    <Wrapper>
      <Header
        onCompanyChange={(newSelection) => setSelectedCompany(newSelection)}
      />
      <MainPanel selectedCompany={selectedCompany} />
    </Wrapper>
  );
};

export default Dashboard;
