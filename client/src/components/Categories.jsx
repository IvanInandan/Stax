const Categories = ({ transactions }) => {
    const total = transactions.reduce((sum, transaction) => {
        return transaction.amount + sum
    }, 0)

    const food = Math.floor(
        transactions
            .filter(transaction => transaction.category === 'Food')
            .reduce((sum, transaction) => sum + transaction.amount, 0) / total * 100
    )

    const gas = Math.floor(
        transactions
            .filter(transaction => transaction.category === 'Gas')
            .reduce((sum, transaction) => sum + transaction.amount, 0) / total * 100
    )

    const entertainment = Math.floor(
        transactions
            .filter(transaction => transaction.category === 'Entertainment')
            .reduce((sum, transaction) => sum + transaction.amount, 0) / total * 100
    )

    const bills = Math.floor(
        transactions
            .filter(transaction => transaction.category === 'Bills')
            .reduce((sum, transaction) => sum + transaction.amount, 0) / total * 100
    )

    return(
        <>
        <h1>Categories</h1>
        <p>Food: {food}%</p>
        <p>Gas: {gas}%</p>
        <p>Entertainment: {entertainment}%</p>
        <p>Bills: {bills}%</p>
        </>
    )
}

export default Categories