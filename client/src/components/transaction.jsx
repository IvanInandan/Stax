const Transaction = ({ transaction, deleteTransaction }) => {
  const removeTransaction = (event) => {
    event.preventDefault();

    if (window.confirm("Are you sure you want to delete this transaction?")) {
      deleteTransaction(transaction.id);
    }
  };

  return (
    <div>
      <span>
        {transaction.name}: {transaction.amount} ({transaction.type}) --{" "}
        {transaction.category}
      </span>

      <button onClick={removeTransaction}>delete</button>
    </div>
  );
};

export default Transaction;
