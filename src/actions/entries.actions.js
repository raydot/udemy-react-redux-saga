// Let's create some action functions:
export const addEntryRedux = (payload) => ({ type: 'ADD_ENTRY', payload });

export const removeEntryRedux = (id) => ({ type: 'REMOVE_ENTRY', payload: { id } });
