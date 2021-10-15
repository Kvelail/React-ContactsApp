import Contact from './Contact';
import dynamicSort from '../helper';

const ContactsList = ({ contactsList, 
                        setContactsList, 
                        searchTerm,
                        setOpenContactIsOpen,
                        openContactIsOpen,
                        setSelectedContact }) => {

    return (
        <ul className="contacts-list">
            { contactsList
                .sort(dynamicSort('name'))
                .filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
                .map(contact => (
                    <Contact key={ contact.id } 
                             contact={ contact }
                             setContactsList={ setContactsList }
                             contactsList={ contactsList }
                             setOpenContactIsOpen={ setOpenContactIsOpen }
                             openContactIsOpen={ openContactIsOpen }
                             setSelectedContact={ setSelectedContact } />
            )) }
        </ul>
    );
    
};
 
export default ContactsList;