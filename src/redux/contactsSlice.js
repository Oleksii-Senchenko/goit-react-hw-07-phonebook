import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';



const pendingStatus = (state) => {
    state.isLoading = true;
    state.error = null
}

const fulfilledGetStatus = (state, action) => {
    state.contacts = action.payload
    state.isLoading = false;
}

const fulfilledFilterStatus = (state, action) => {
    state.isLoading = false;
    state.error = null
    state.contacts = state.contacts.filter((contact) => (
        contact.id !== action.payload.id
    ))
}

const fulfilledAddStatus = (state, action) => {
    state.isLoading = false;
    state.error = null
    state.contacts.push(action.payload)
}


const rejectedStatus = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    },


    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, pendingStatus)
        .addCase(deleteContact.pending, pendingStatus)
        .addCase(addContact.pending, pendingStatus)

        .addCase(getContacts.fulfilled, fulfilledGetStatus)
        .addCase(deleteContact.fulfilled, fulfilledFilterStatus)
        .addCase(addContact.fulfilled, fulfilledAddStatus)
        
        .addCase(getContacts.rejected, rejectedStatus)
        .addCase(deleteContact.rejected, rejectedStatus)
        .addCase(addContact.rejected, rejectedStatus)
    }
});





//Seletors 
export default contactsSlice
export const getContactsState = state => state.contacts.contacts
