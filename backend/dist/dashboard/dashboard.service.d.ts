export declare class DashboardService {
    getMetrics(): {
        id: number;
        label: string;
        value: string;
        change: string;
        changeType: string;
    }[];
    getRevenue(): {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
        }[];
    };
    getTopProducts(): {
        id: number;
        name: string;
        popularity: number;
        sales: number;
    }[];
    getVisitorInsights(): {
        loyal: number[];
        new: number[];
        unique: number[];
    };
    getCustomerSatisfaction(): {
        lastMonthTotal: number;
        thisMonthTotal: number;
        lastMonthData: number[];
        thisMonthData: number[];
    };
}
