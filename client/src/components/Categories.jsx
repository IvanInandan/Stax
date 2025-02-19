import {
  findCategories,
  countCategory,
  calcPercent,
} from "../helper/transactionFuncs";

const Categories = ({ transactions }) => {
  const categories = findCategories(transactions);
  console.log;

  return (
    <div>
      <h1>Categories</h1>

      <ul>
        {categories.map((category, index) => {
          const percent = Math.round(
            (countCategory(transactions, category) / transactions.length) * 100
          );

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
