import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { addEntryRedux } from '../actions/entries.actions';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  function addEntry() {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense,
    }));
    setDescription('');
    setValue('');
    setIsExpense(true);
  }
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      { /* eslint-disable-next-line */}
      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;
