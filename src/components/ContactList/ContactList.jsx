import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFiltersQuery } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const query = useSelector(getFiltersQuery);

  const outputContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query)
  );

  return (
    <List>
      {outputContacts.length > 0 ? (
        outputContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <div>No data</div>
      )}
    </List>
  );
};
