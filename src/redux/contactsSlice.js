import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true; // встановлення стану завантаження
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload; // зберігання отриманих контактів
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // зберігання помилки
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload); // додавання нового контакту
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        ); // видалення контакту
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts;
export const contactReducer = contactSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filter.filter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
