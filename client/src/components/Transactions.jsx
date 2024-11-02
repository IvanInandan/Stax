const Transactions = ({ transactions }) => {
    return (
        <>
            <h1>Transactions</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                    {transactions.map((transaction, index) => {
                        return (
                            <tr key={index}>
                                <td>{transaction.name}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.type}</td>
                                <td><button>remove</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </>
    )
}

export default Transactions