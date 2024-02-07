import React, { useState } from 'react';

function Form({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount(0);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const inputStyle = {
    margin: '10px',
    padding: '5px',
    width: '200px'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required style={inputStyle} />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required style={inputStyle} />
      <select value={type} onChange={e => setType(e.target.value)} style={inputStyle}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;