import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Sale } from './entities/sale.entity'; // Import the new entity

@Module({
  imports: [TypeOrmModule.forFeature([Sale])], // Add the entity here
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
