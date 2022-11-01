import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import { closeEditModal } from '../actions/modals.actions';

function ModalEdit({
    isOpen,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) {
    const dispatch = useDispatch();
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Cancel</Button>
                <Button onClick={() => dispatch(closeEditModal())} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;
