// Here is our reducer!
// Reducers should not have side effects.
// Never mutate a state or action.
// function entriesReducer(state = initialEntries, action) {

// eslint-disable-next-line
const reducer = (state = initialEntries, action) => {
    // console.log(action); <- console.log is a side effect!
    let newEntries;
    switch (action.type) {
        case 'ADD_ENTRY': {
            // This is error.  Should not modify entries directly:
            // const newEntries = entries.concat({ ...action.payload });
            newEntries = state.concat({ ...action.payload });
            return newEntries;
        }
        case 'REMOVE_ENTRY': {
            newEntries = state.filter((entry) => entry.id !== action.payload.id);
            return newEntries;
        }
        default: {
            return state;
        }
    }
};

export default reducer;

const initialEntries = [{
    id: 2,
    description: 'Work income redux',
    value: 1000.00,
    isExpense: false,
},
{
    id: 3,
    description: 'Water Bill redux',
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
