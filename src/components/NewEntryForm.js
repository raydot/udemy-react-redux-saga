import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({
  addEntry, description, value, isExpense, setDescription, setValue, setIsExpense,
}) {
  return (
    <div>
      <Form unstackable>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />

        <ButtonSaveOrCancel addEntry={addEntry} />
      </Form>
    </div>
  );
}

export default NewEntryForm;
