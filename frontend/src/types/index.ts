export interface Metric {
  label: string;
  value: string;
  change: string;
}

export interface TopProduct {
  id?: number; // Make ID optional to satisfy all uses
  name: string;
  popularity: number;
  sales: number;
}

export interface RevenueData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}

export interface VisitorData {
  loyal: number[];
  new: number[];
  unique: number[];
}

export interface SatisfactionData {
  lastMonthTotal: number;
  thisMonthTotal: number;
  lastMonthData: number[];
  thisMonthData: number[];
}
