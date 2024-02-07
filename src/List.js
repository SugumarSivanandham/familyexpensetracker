import React from 'react';

function List({ transactions }) {
  const listStyle = {
    listStyleType: 'none'
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ccc'
  };

  return (
    <ul style={listStyle}>
      {transactions.map((transaction, index) => (
        <li key={index} style={listItemStyle}>
          {transaction.description}: {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
        </li>
      ))}
    </ul>
  );
}

export default List;