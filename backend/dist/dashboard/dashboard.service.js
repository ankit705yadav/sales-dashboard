"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sale_entity_1 = require("./entities/sale.entity");
const date_fns_1 = require("date-fns");
let DashboardService = class DashboardService {
    salesRepository;
    constructor(salesRepository) {
        this.salesRepository = salesRepository;
    }
    async getMetrics() {
        const today = (0, date_fns_1.startOfDay)(new Date());
        const yesterday = (0, date_fns_1.startOfDay)((0, date_fns_1.subDays)(today, 1));
        const queryBuilder = this.salesRepository.createQueryBuilder('sale');
        const todayMetrics = await queryBuilder
            .select('SUM(sale.amount)', 'totalSales')
            .addSelect('COUNT(sale.id)', 'totalOrders')
            .addSelect('COUNT(DISTINCT sale.productName)', 'productsSold')
            .addSelect('SUM(CASE WHEN sale.isNewCustomer = true THEN 1 ELSE 0 END)', 'newCustomers')
            .where('sale.date >= :today', { today })
            .getRawOne();
        return [
            {
                label: 'Total Sales',
                value: `$${parseFloat(todayMetrics.totalSales || 0).toFixed(0)}`,
                change: '+8%',
            },
            {
                label: 'Total Order',
                value: todayMetrics.totalOrders || '0',
                change: '+5%',
            },
            {
                label: 'Product Sold',
                value: todayMetrics.productsSold || '0',
                change: '+1.2%',
            },
            {
                label: 'New Customers',
                value: todayMetrics.newCustomers || '0',
                change: '0.5%',
            },
        ];
    }
    async getRevenue() {
        const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
        const revenue = await this.salesRepository
            .createQueryBuilder('sale')
            .select("TO_CHAR(sale.date, 'Day')", 'day')
            .addSelect('SUM(CASE WHEN sale.isOffline = false THEN sale.amount ELSE 0 END)', 'onlineSales')
            .addSelect('SUM(CASE WHEN sale.isOffline = true THEN sale.amount ELSE 0 END)', 'offlineSales')
            .where('sale.date >= :sevenDaysAgo', { sevenDaysAgo })
            .groupBy("TO_CHAR(sale.date, 'Day')")
            .orderBy('MIN(sale.date)')
            .getRawMany();
        const labels = revenue.map((r) => r.day.trim());
        const onlineData = revenue.map((r) => parseFloat(r.onlineSales));
        const offlineData = revenue.map((r) => parseFloat(r.offlineSales));
        return {
            labels,
            datasets: [
                { label: 'Online Sales', data: onlineData },
                { label: 'Offline Sales', data: offlineData },
            ],
        };
    }
    async getTopProducts() {
        const topProducts = await this.salesRepository
            .createQueryBuilder('sale')
            .select('sale.productName', 'name')
            .addSelect('COUNT(sale.id)', 'salesCount')
            .groupBy('sale.productName')
            .orderBy('salesCount', 'DESC')
            .limit(4)
            .getRawMany();
        return topProducts.map((p) => ({
            ...p,
            popularity: Math.floor(Math.random() * 50) + 20,
            sales: Math.floor(Math.random() * 40) + 50,
        }));
    }
    getVisitorInsights() {
        return {
            loyal: [330, 340, 280, 180, 220, 280, 310, 300, 240, 180, 150, 130],
            new: [250, 260, 360, 330, 210, 230, 290, 370, 320, 290, 240, 200],
            unique: [220, 130, 190, 280, 250, 320, 260, 210, 280, 310, 260, 220],
        };
    }
    getCustomerSatisfaction() {
        return {
            lastMonthTotal: 3004,
            thisMonthTotal: 4504,
            lastMonthData: [150, 180, 120, 120, 220, 200, 210],
            thisMonthData: [220, 200, 210, 180, 220, 230, 250],
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sale_entity_1.Sale)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map