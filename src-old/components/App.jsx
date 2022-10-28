import { Box } from 'components/Commons/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

export const App = () => {
  return (
    <Box width="1024px" mx="auto" display="flex" gap="20px">
      <Box>
        <Box as="h1">Phonebook</Box>
        <ContactForm />
      </Box>
      <Box ml="10px">
        <Box as="h2">Contacts</Box>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};
