import { Box } from 'components/Commons/Box';
import { FilterTitle } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterQuery } from 'redux/selectors';
import { setFilterQuery } from './../../redux/actions';

export const Filter = () => {
  const query = useSelector(getFilterQuery);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilterQuery(e.target.value.toLowerCase().trim()));
  };

  return (
    <Box>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Input
        type="text"
        name="filter"
        value={query}
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
