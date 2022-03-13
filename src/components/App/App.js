import { ArticleConteiner } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactsFilter';
import ContactList from '../ContactList';
import { useState } from 'react';

export default function App () {
  const [filter, setFilter] = useState("");
  const handlerFilterName = e => {setFilter(e.target.value)};

    return (
      <ArticleConteiner>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handlerFilterName} />
        <ContactList filter={filter} />
      </ArticleConteiner>
    );
}
