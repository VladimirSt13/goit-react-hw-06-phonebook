import { createSlice } from '@reduxjs/toolkit';

const initialFilters = { query: '' };

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFilterQuery(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setFilterQuery } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
