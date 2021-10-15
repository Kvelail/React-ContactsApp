import { FaWindowClose } from 'react-icons/fa';

const Contact = ({ contact, 
                   setContactsList, 
                   contactsList,
                   setOpenContactIsOpen,
                   openContactIsOpen,
                   setSelectedContact }) => {

    const handleDeleteContact = id => {

        const newContactsList = contactsList.filter(contact => contact.id !== id);
        setContactsList(newContactsList);
  
    };

    const handleOpenContact = id => {

        setOpenContactIsOpen(!openContactIsOpen);

        const contact = contactsList.find(contact => contact.id === id);

        setSelectedContact(contact);

    };

    return (
        <li className="contact">
            <h2 className="contact__name"
                onClick={ () => handleOpenContact(contact.id)}>
                    { contact.name }
            </h2>
            <span className="contact__icon"
                  onClick={ () => handleDeleteContact(contact.id) }>
                <FaWindowClose />
            </span>
        </li>
    );
    
};
 
export default Contact;