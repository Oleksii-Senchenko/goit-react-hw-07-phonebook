const { createSlice } = require("@reduxjs/toolkit");

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterList(state, action) {
            return action.payload;
        }
    }
});

export const { filterList } = filterSlice.actions
export const getStateFilter = state => state.filter