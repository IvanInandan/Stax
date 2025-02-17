const Transaction = ({ transaction }) => {
  return (
    <div>
      <span>
        {transaction.name}: {transaction.amount} ({transaction.type}) --{" "}
        {transaction.category}
      </span>

      <button>Delete</button>
    </div>
  );
};

export default Transaction;
