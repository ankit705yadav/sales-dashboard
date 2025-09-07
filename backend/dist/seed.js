"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
const sale_entity_1 = require("./dashboard/entities/sale.entity");
const faker_1 = require("@faker-js/faker");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const salesRepository = app.get((0, typeorm_1.getRepositoryToken)(sale_entity_1.Sale));
    console.log('Seeding database...');
    const productNames = [
        'Home Decor Range',
        'Disney Princess Pink Bag 18"',
        'Bathroom Essentials',
        'Apple Smartwatches',
        'Wireless Headphones',
        'Coffee Maker',
    ];
    const sales = [];
    for (let i = 0; i < 2000; i++) {
        sales.push({
            productName: faker_1.faker.helpers.arrayElement(productNames),
            amount: faker_1.faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
            date: faker_1.faker.date.past({ years: 1 }),
            isOffline: faker_1.faker.datatype.boolean(),
            isNewCustomer: faker_1.faker.datatype.boolean({ probability: 0.2 }),
        });
    }
    await salesRepository.clear();
    await salesRepository.save(sales);
    console.log('Seeding complete!');
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map