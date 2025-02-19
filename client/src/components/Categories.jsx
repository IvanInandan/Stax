import {
  findCategories,
  categoryTotal,
  calcPercent,
} from "../helper/transactionFuncs";

const Categories = ({ transactions }) => {
  const totalSpendings = transactions.reduce((acc, transaction) => {
    return acc + parseInt(transaction.amount);
  }, 0);

  const categories = findCategories(transactions);

  return (
    <div>
      <h1>Categories</h1>

      <ul>
        {categories.map((category, index) => {
          const total = categoryTotal(transactions, category);
          console.log(total);
          const percent = Math.round((total / totalSpendings) * 100);
          console.log(percent);

          return (
            <li key={index}>
              {category}: {percent}%
            </li>
          );
        })}
      </ul>

      <h3>Total: ${totalSpendings}</h3>
    </div>
  );
};

export default Categories;
