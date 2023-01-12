
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {Form, Label, Input,  Button, } from './Form.Styled';
import { addContact } from 'redux/ContactSlise';
import { getContact } from 'redux/selectors';
import { toast } from 'react-toast';



export default function ContactForm () {  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();
    console.log(contacts)
   

  const  handleChange = e => {
      const { name, value } = e.target;
      console.log(name,value)
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;            
            default:
                break;   
       }      
    }        
  
 
  const  handleSubmit = e => {            
      e.preventDefault();
      const contactName = contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase());
           console.log(contactName)
      
    const contactNumber = contacts.some(contact => contact.number === number);
       const form = e.target;
        if (contactName) {
      toast(`${contactName} is alredy in contacts`);
      return;
    } else {
        dispatch(addContact(contactName, contactNumber));
      }     
        form.reset();     
    } 
   
       
        return (
            <>
                <Form onSubmit = {handleSubmit}>
                    <Label  htmlFor="fname">Name </Label>
                    < Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />               
                    <Label  htmlFor="fname">Number</Label > 
                        < Input
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />                    
                        < Button type = "submit" >add contact</ Button>                
                </Form>            
            </>
        )
    }
 

