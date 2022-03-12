import { ContactsListBtn, ContactsListItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from "../../redux/sliceContacts";
import { useGetContactsQuery, useDeleteContactsMutation } from '../../redux/contactsAPI';


const ContactItem = () => {
  const { data: contacts, error, isLoading, isUninitialized, isFetching, refetch, isError } = useGetContactsQuery()

    // const dispatch = useDispatch()
    // const contacts = useSelector(state => state.contacts.items);
    // const filter = useSelector(state => state.contacts.filter);

  // const filterVisibleContacts = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  // const handlerDeleteContact = name => {dispatch(removeContacts(contacts.filter(contact => contact.name !== name)))};
  const [deleteContact] = useDeleteContactsMutation()

    return (<>
    {contacts && contacts.map(contact => (
    <ContactsListItem key={contact.id}>
      {contact.name}: {contact.phone}
      <ContactsListBtn
      onClick={() => deleteContact(contact.id)}
      >Delete
      </ContactsListBtn>
    </ContactsListItem>
  ))}
    </>)}

export default ContactItem;

// ContactItem.propTypes = {
//   contactsItem: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
