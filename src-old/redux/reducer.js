// V1
// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filters: {
//     query: '',
//   },
// };
// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filters/setFilterQuery':
//       return {
//         ...state,
//         filters: { ...state.filters, query: action.payload },
//       };
//     default:
//       return state;
//   }
// };

// -V2----------------

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsReduser = (state = initialContacts, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];
//     case 'contacts/deleteContact':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const initialFilters = { query: '' };

// const filtersReducer = (state = initialFilters, action) => {
//   switch (action.type) {
//     case 'filters/setFilterQuery':
//       return { ...state, query: action.payload };

//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReduser(state.contacts, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// --Redux toolkit---
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilterQuery } from './actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReduser = createReducer(initialContacts, {
  [addContact]: (state, action) => state.push(action.payload),
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const initialFilters = { query: '' };

export const filtersReducer = createReducer(initialFilters, {
  [setFilterQuery]: (state, action) => (state.filters = action.payload),
});
