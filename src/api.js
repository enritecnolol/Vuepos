export const apis = {
  routes: {
    auth: {
      login: "/login"
    },
    categories:{
      all:'categories',
      all_paginate:'categories/paginate',
      insert:'category',
      edit:'category',
      delete:'category'
    },
    products:{
      all:'products',
      all_paginate:'products/paginate',
      insert:'product',
      edit:'product',
      delete:'product',
      search:'products/search'

    },
    cart:{
      payInvoice:'billing',
      summary:'dashboard/summary'
    },
    dashboard:{
      salePerMonth:'dashboard/salesPerMonth',
      dailySales:'dashboard/DailySales',
      salesByCategory:'dashboard/SalesByCategory',
      hourlySales:'dashboard/HourlySales',
      SalesByDaysOfTheWeek:'dashboard/SalesByDaysOfTheWeek',
      MostSellingProducts:'dashboard/MostSellingProducts',
    }
  }
};
