const findCategories = (transactions) => {
  const categories = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  return categories;
};

const categoryTotal = (transactions, category) => {
  let total = transactions.reduce((count, transaction) => {
    return transaction.category === category
      ? count + Number(transaction.amount)
      : count;
  }, 0);

  return total;
};

const calcPercent = (transactions, categories) => {
  const breakdown = categories.reduce((acc, category) => {
    acc[category] = countCategory(transactions, category) / transactions.length;
    return acc;
  }, {});

  return breakdown;
};

export { findCategories, categoryTotal, calcPercent };
