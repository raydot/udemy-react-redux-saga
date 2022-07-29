import React, { useState, useCallback } from 'react';
import {
  Container,
} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';

let initialEntries; // initialize so it can be declared at bottom

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = useCallback((id) => {
    const result = entries.filter((entry) => entry.id !== id);
    console.log('entries', entries);
    console.log('result', result);
    setEntries(result);
  }, [entries]); // Using useCallback instead of passing the function as a prop.

  return (
    <Container>

      <MainHeader title="Budget" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />

    </Container>
  );
}

export default App;

initialEntries = [{
  id: 2,
  description: 'Work income',
  value: '1000.00',
  isExpense: false,
},
{
  id: 3,
  description: 'Water Bill',
  value: '121.00',
  isExpense: true,
},
{
  id: 4,
  description: 'Rent',
  value: '300.00',
  isExpense: true,
},
{
  id: 5,
  description: 'ConEd',
  value: '25.00',
  isExpense: true,
},
];
