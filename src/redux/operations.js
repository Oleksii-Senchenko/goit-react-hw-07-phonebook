import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


axios.defaults.baseURL = 'https://64f7457a9d7754084953647c.mockapi.io/'


export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("contacts/phonebook")
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const responce = await axios.delete(
                `contacts/phonebook/${id}`
            )

            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post(
                'contacts/phonebook',
                contact
            )
            return responce.data

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)