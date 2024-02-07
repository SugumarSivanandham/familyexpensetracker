import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import Summary from './Summary';
import './App.css';

function App() {
  // State to hold our transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Styling for our app
  const appStyle = {
    backgroundColor: '#e0e0e0', // Set your desired background color here
    padding: '50px', // Add padding for better aesthetics
  };

  return (
    <div style={appStyle}>
      <h1>Budget Tracker</h1>
      <Form addTransaction={addTransaction} />
      <List transactions={transactions} />
      <Summary transactions={transactions} />
    </div>
  );
}

export default App;