import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
export declare class DashboardService {
    private salesRepository;
    constructor(salesRepository: Repository<Sale>);
    getMetrics(): Promise<{
        label: string;
        value: any;
        change: string;
    }[]>;
    getRevenue(): Promise<{
        labels: any[];
        datasets: {
            label: string;
            data: number[];
        }[];
    }>;
    getTopProducts(): Promise<any[]>;
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
