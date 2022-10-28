import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilterQuery } from './../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const query = useSelector(getFilterQuery);

  const outputContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query)
  );

  return (
    <List>
      {outputContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
