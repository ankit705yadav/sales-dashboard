'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DashboardService = void 0;
const common_1 = require('@nestjs/common');
let DashboardService = class DashboardService {
  getMetrics() {
    return [
      {
        id: 1,
        label: 'Total Sales',
        value: '$1K',
        change: '+8%',
        changeType: 'increase',
      },
      {
        id: 2,
        label: 'Total Order',
        value: '300',
        change: '+5%',
        changeType: 'increase',
      },
      {
        id: 3,
        label: 'Product Sold',
        value: '5',
        change: '+1.2%',
        changeType: 'increase',
      },
      {
        id: 4,
        label: 'New Customers',
        value: '8',
        change: '0.5%',
        changeType: 'increase',
      },
    ];
  }
  getRevenue() {
    return {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          label: 'Online Sales',
          data: [14000, 17000, 6000, 16000, 12000, 16800, 21000],
        },
        {
          label: 'Offline Sales',
          data: [12500, 11800, 22500, 6500, 11000, 13500, 11000],
        },
      ],
    };
  }
  getTopProducts() {
    return [
      { id: 1, name: 'Home Decor Range', popularity: 45, sales: 85 },
      {
        id: 2,
        name: 'Disney Princess Pink Bag 18"',
        popularity: 29,
        sales: 70,
      },
      { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 65 },
      { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 75 },
    ];
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
exports.DashboardService = DashboardService = __decorate(
  [(0, common_1.Injectable)()],
  DashboardService,
);
