import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({filter}) => (
  <ol>
    <ContactItem filter={filter} />
  </ol>
);

export default ContactList;

ContactItem.propTypes = {
  filter: PropTypes.string.isRequired,
};
