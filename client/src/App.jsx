import { useState, useEffect } from 'react'
import Balance from './components/Balance'
import Transactions from './components/Transactions'
import Categories from './components/Categories'

const App = () => {
  const [balance, setBalance] = useState(0)
  const [newBalance, setNewBalance] = useState('')

  const transactions = [
    {
      name: "Shell",
      category: "Gas",
      amount: 60,
      type: "debit"
    },
    {
      name: "Din Tai Fung",
      category: "Food",
      amount: 120,
      type: "debit"
    },
    {
      name: "Venmo",
      category: "Transfer",
      amount: 50,
      type: "credit"
    },
    {
      name: "Mesa Rim",
      category: "Bills",
      amount: 99,
      type: "debit"
    },
    {
      name: "Angelikas",
      category: "Entertainment",
      amount: 21,
      type: "debit"
    },
  ]

  const updateNewBalance = (event) => {
    setNewBalance(event.target.value)
  }

  const updateBalance = (event) => {
    event.preventDefault()
    setBalance(newBalance)
    setNewBalance('')
  }

  return (
    <div>
      <Balance
        balance={balance}
        updateBalance={updateBalance}
        newBalance={newBalance}
        updateNewBalance={updateNewBalance}
      />
      <Transactions
        transactions={transactions}
      />
      <Categories
        transactions={transactions}
      />
    </div>
  )
}

export default App