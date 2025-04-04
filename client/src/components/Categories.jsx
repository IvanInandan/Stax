import {
  findCategories,
  categoryTotal,
  calcPercent,
} from "../helper/transactionFuncs.js";

const Categories = ({ transactions }) => {
  const totalSpendings = transactions.reduce((acc, transaction) => {
    return acc + Number(transaction.amount);
  }, 0);

  const categories = findCategories(transactions);

  return (
    <div>
      <h1>Categories</h1>

      <ul>
        {categories.map((category, index) => {
          const total = categoryTotal(transactions, category);
          const percent = Math.round((total / totalSpendings) * 100);

          return (
            <li key={index}>
              {category}: {percent}%
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
