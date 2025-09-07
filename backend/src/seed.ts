import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sale } from './dashboard/entities/sale.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const salesRepository = app.get<Repository<Sale>>(getRepositoryToken(Sale));

  console.log('Seeding database...');

  const productNames = [
    'Home Decor Range',
    'Disney Princess Pink Bag 18"',
    'Bathroom Essentials',
    'Apple Smartwatches',
    'Wireless Headphones',
    'Coffee Maker',
  ];

  const sales: Partial<Sale>[] = [];
  for (let i = 0; i < 2000; i++) {
    // Create 2000 sale records
    sales.push({
      productName: faker.helpers.arrayElement(productNames),
      amount: faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
      date: faker.date.past({ years: 1 }),
      isOffline: faker.datatype.boolean(),
      isNewCustomer: faker.datatype.boolean({ probability: 0.2 }), // 20% chance of being a new customer
    });
  }

  // Clear existing data and insert new data
  await salesRepository.clear();
  await salesRepository.save(sales);

  console.log('Seeding complete!');
  await app.close();
}

bootstrap();
