export type Option = {
  value: string;
  label: string;
};

type CompanyDataSet = {
  dataset_code: "string";
};

type ChartDataSet = [string, number];

export interface CompanyDataItemDTO {
  datasets: CompanyDataSet[];
}

export interface ChartDataItemDTO {
  dataset_data: {
    data: ChartDataSet[];
  };
}
