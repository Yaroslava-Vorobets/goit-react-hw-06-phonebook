
import { Input, Label } from './Filter.Styled';
//  import { getFilter } from 'redux/selectors';
import {setStatusFilter } from 'redux/FilterSlise';
import {useDispatch} from 'react-redux';

const Filter = () => {
//    const value = useSelector(getFilter)
    const dispatch = useDispatch();
    const query = e => e.target.value;


    return (
         <>
            <Label htmlFor="fname">Fined contacts by name</Label>       
            <Input
                onChange={e => dispatch(setStatusFilter(query))}
                // value={value}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </>

    )
}


    export default Filter;