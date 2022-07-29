import React from 'react';
import {
  Container,
} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>

      <MainHeader title="Budget" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine description="Income" value="221.54" />
      <EntryLine description="Expense" value="121.53" isExpense />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
