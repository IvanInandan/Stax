const Balance = ({ balance, updateBalance, newBalance, updateNewBalance }) => (
    <>
        <h1>Balance: ${balance}</h1>
        <form>
            <input type="number" value={newBalance} onChange={updateNewBalance} />
            <button onClick={updateBalance}>Update</button>
        </form>
    </>
)

export default Balance