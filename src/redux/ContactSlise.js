import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const instialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; 


export const ContactSlise = createSlice({
    name: 'contacts',
     initialState:{data: instialContacts},
    reducers: {     
    addContact(state, action) {           
                state.data.push(action.payload)            
            },               
            prepare(name,number) {
             return {
                payload: {
                    id: nanoid(),
                    name,
                    number,
                 },
                };
            },
          
    deleteContact (state, action) {
      const index = state.data.findIndex(
        contact => contact.id === action.payload);
            state.data.splice(index, 1);
            },
  }
    }
)
export const { addContact, deleteContact } = ContactSlise.actions;
export const ContactReduser = ContactSlise.reducer;
