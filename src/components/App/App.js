import { ArticleConteiner } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactsFilter';
import ContactList from '../ContactList';
// import { useGetContactsByNameQuery } from '../../redux/contactsAPI';
import { useGetContactsQuery, useDeleteContactsMutation } from '../../redux/contactsAPI';
import { useState } from 'react';

export default function App () {
  const [contactsName, setContactsName] = useState("")

  const { data, error, isLoading, isUninitialized, isFetching, refetch, isError } = useGetContactsQuery(contactsName,
    {
    // skip: pokemonName === "",
    // pollingInterval: 3000,
    // refetchOnFocus: true,
    })

  const handleSubmit = e => {
    e.preventDefault();
    setContactsName(e.currentTarget.elements.contactsName.value);
    e.currentTarget.reset();
  }

  const showPokemonName = data && !isFetching && !isError;

  const [deleteContact, {data: deleteData, isLoading: isDeleting}] = useDeleteContactsMutation()

    return (
      <ArticleConteiner>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <form onSubmit={handleSubmit}>
          <input type="text" name='contactsName'></input>
          <button type='submit'>Search</button>
          {isFetching && "Laoding..."}
          {showPokemonName && <h2>{data.name}</h2>}
          {isError && <p>{error.data}</p>}
          <button onClick={refetch} disabled={isUninitialized}>Refetch</button>
        </form>
        <ul>
          {data && data.map(contact => (
            <li key={contact.id}>
              {contact.name}
              {contact.phone}
              <button onClick={()=>{deleteContact(contact.id)}}>{isDeleting ? "deleting..." : "Delete"}</button>
            </li>
          ))}
          </ul>
      </ArticleConteiner>
    );
}
