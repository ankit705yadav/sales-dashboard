import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { startOfDay, subDays } from 'date-fns';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
  ) {}

  async getMetrics() {
    const today = startOfDay(new Date());

    const queryBuilder = this.salesRepository.createQueryBuilder('sale');

    const todayMetrics = await queryBuilder
      .select('SUM(sale.amount)', 'totalSales')
      // This is the corrected query chain 👇
      .addSelect('COUNT(sale.id)', 'totalOrders')
      .addSelect('COUNT(DISTINCT sale.productName)', 'productsSold')
      .addSelect(
        'SUM(CASE WHEN sale.isNewCustomer = true THEN 1 ELSE 0 END)',
        'newCustomers',
      )
      .where('sale.date >= :today', { today })
      .getRawOne();

    // For simplicity, we'll return static change values for now.
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
    const sevenDaysAgo = subDays(new Date(), 7);

    const revenue = await this.salesRepository
      .createQueryBuilder('sale')
      .select("TO_CHAR(sale.date, 'Day')", 'day')
      .addSelect(
        'SUM(CASE WHEN sale.isOffline = false THEN sale.amount ELSE 0 END)',
        'onlineSales',
      )
      .addSelect(
        'SUM(CASE WHEN sale.isOffline = true THEN sale.amount ELSE 0 END)',
        'offlineSales',
      )
      .where('sale.date >= :sevenDaysAgo', { sevenDaysAgo })
      .groupBy("TO_CHAR(sale.date, 'Day')")
      .orderBy('MIN(sale.date)')
      .getRawMany();

    // The data is not in the exact format the frontend expects, so we format it.
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
      .orderBy('COUNT(sale.id)', 'DESC')
      .limit(4)
      .getRawMany();

    return topProducts.map((p) => ({
      ...p,
      popularity: Math.floor(Math.random() * 50) + 20,
      sales: Math.floor(Math.random() * 40) + 50,
    }));
  }

  // You would refactor getVisitorInsights and getCustomerSatisfaction in a similar way,
  // using queries to aggregate data from the 'sales' table.
  // For now, we can leave them as static.
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
}
