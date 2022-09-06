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

// let initialEntries;

function App() {
  // const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);

      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;
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
  ///

  // An observer!
  // store.subscribe(() => {
  //   console.log('store:', store.getState());
  // });

  // Early dispatch tests
  // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch({ type: 'REMOVE_ENTRY', payload: payload_remove });
  // store.dispatch(removeEntryRedux(2));

  ///
  // This has now been moved into a Redux action
  // function deleteEntry(id) {
  //   const result = entries.filter((entry) => entry.id !== id);
  //   console.log(result);
  //   // setEntries(result);
  // }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  /* eslint-disable no-shadow */
  function addEntry() {
    // //const result = entries.concat({
    //   id: entries.length + 2,
    //   description,
    //   value,
    //   isExpense,
    // });
    // setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    // console.log('RES:', description, value);
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        editEntry={editEntry}
      />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

/* initialEntries = [{
  id: 2,
  description: 'Work income',
  value: 1000.00,
  isExpense: false,
},
{
  id: 3,
  description: 'Water Bill',
  value: 121.00,
  isExpense: true,
},
{
  id: 4,
  description: 'Rent',
  value: 300.00,
  isExpense: true,
},
{
  id: 5,
  description: 'ConEd',
  value: 25,
  isExpense: true,
},
];
*/
