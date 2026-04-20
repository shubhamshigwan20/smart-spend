const GET_SUMMARY = `/dashboard/summary`; //GET

const GET_CATEGORY_BREAKDOWN = `/dashboard/category-breakdown`; //GET

const GET_MONEY_TREND = (type: string) => `/dashboard/money-trend?type=${type}`; //GET

const GET_EXPENSES = (limit: number, offset: number) =>
  `/expenses?limit=${limit}&offset=${offset}`; //GET

const GET_ALERTS = `/alerts`; //GET

const GET_INSIGHTS = `/insights`; //GET

export {
  GET_SUMMARY,
  GET_CATEGORY_BREAKDOWN,
  GET_MONEY_TREND,
  GET_EXPENSES,
  GET_ALERTS,
  GET_INSIGHTS,
};
