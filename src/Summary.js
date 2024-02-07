import React from 'react';

function Summary({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;

  const summaryStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px'
  };

  return (
    <div style={summaryStyle}>
      <p>Total income: {income}</p>
      <p>Total expenses: {expenses}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default Summary;