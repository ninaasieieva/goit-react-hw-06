import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const selectNameFilter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;