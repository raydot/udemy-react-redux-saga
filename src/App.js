/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  Container,
} from 'semantic-ui-react';
import './App.css';
// import { createStore, combineReducers } from 'redux';
import { useSelector } from 'react-redux';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import DisplayBalance from './components/DisplayBalance'; // initialize so it can be declared at bottom

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id]);

  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;
    // eslint-disable-next-line no-shadow
    entries.map((entry) => {
      if (entry.isExpense) {
        expenseTotal += Number(entry.value);
        return expenseTotal;
      }
      incomeTotal += Number(entry.value);
      return incomeTotal;
    });
    setTotal(incomeTotal - expenseTotal);
    setTotalExpense(expenseTotal);
    setTotalIncome(incomeTotal);
  }, [entries]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        // editEntry={editEntry}
      />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit
        isOpen={isOpen}
        entry={entry}
        // {...entry} // This is what Icaro does but the
        // linter forbids passing spread props to components.
      />
    </Container>
  );
}

export default App;
