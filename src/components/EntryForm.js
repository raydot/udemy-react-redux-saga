/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function EntryForm({
    description, setDescription, value, setValue, isExpense, setIsExpense,
}) {
    return (
        <>
            <Form.Group width={3}>
                <Form.Input
                    icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New shiny thing."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    width={2}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label="is expense"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </>
    );
}

export default EntryForm;
