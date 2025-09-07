import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Dashboard')
@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('metrics')
  @ApiOperation({ summary: 'Get summary metrics' })
  getMetrics() {
    return this.dashboardService.getMetrics();
  }

  @Get('revenue')
  @ApiOperation({ summary: 'Get total revenue data' })
  getRevenue() {
    return this.dashboardService.getRevenue();
  }

  @Get('top-products')
  @ApiOperation({ summary: 'Get top selling products' })
  getTopProducts() {
    return this.dashboardService.getTopProducts();
  }

  @Get('visitor-insights')
  @ApiOperation({ summary: 'Get visitor insights data' })
  getVisitorInsights() {
    return this.dashboardService.getVisitorInsights();
  }

  @Get('customer-satisfaction')
  @ApiOperation({ summary: 'Get customer satisfaction data' })
  getCustomerSatisfaction() {
    return this.dashboardService.getCustomerSatisfaction();
  }
}
