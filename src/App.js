import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import DisplayBalance from './components/DisplayBalance';

let initialEntries; // initialize so it can be declared at bottom

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
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
    // console.log(`Income: ${totalIncome}, Expenses: ${totalExpenses}`);
  }, [entries]);

  const deleteEntry = useCallback((id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }, [entries]); // Using useCallback instead of passing the function as a prop.

  const editEntry = useCallback((id) => {
    // console.log(`edit entry with id: ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }, [entries]);

  /* eslint-disable no-shadow */
  const addEntry = useCallback(() => {
    const result = entries.concat({
      id: entries.length + 3,
      description,
      value,
      isExpense,
    });
    // console.log('result', result);
    // console.log('entries', entries);
    setEntries(result);
    resetEntry();
  }, [entries]);

  return (
    <Container>

      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
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

initialEntries = [{
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
