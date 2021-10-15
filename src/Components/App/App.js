import './App.css';
import { useEffect, useRef, useState } from 'react';
import AddContact from '../Add-Contact/AddContact';
import ContactsList from '../ContactsList';
import Header from '../Header';
import NewContact from '../Add-Contact/NewContact';
import SearchContact from '../SearchContact';
import LOCAL_STORAGE_KEY from '../../static';
import OpenContact from '../Open-Contact/OpenContact';

const App = () => {

    const [contactsList, setContactsList] = useState(
      () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    );

    const [newContactIsOpen, setNewContactIsOpen] = useState(false);

    const [searchTerm, setSerachTerm] = useState('');

    const buttonRef = useRef(null);

    const [openContactIsOpen, setOpenContactIsOpen] = useState(false);

    const [selectedContact, setSelectedContact] = useState({
        name : '',
        phone : '',
        note : ''
    });

    const handleOpenCloseNewContact = () => {

        buttonRef.current.blur();

        setNewContactIsOpen(!newContactIsOpen);

    };

    useEffect(() => {

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactsList));

    }, [contactsList]);
    
    return (
      <div className="main">
        <AddContact setNewContactIsOpen={ setNewContactIsOpen }
                    handleOpenCloseNewContact={ handleOpenCloseNewContact }
                    buttonRef={ buttonRef }/>
        <Header />
        <SearchContact setSerachTerm={ setSerachTerm }/>
        <ContactsList contactsList={ contactsList }
                      setContactsList={ setContactsList }
                      searchTerm={ searchTerm }
                      setOpenContactIsOpen={ setOpenContactIsOpen }
                      openContactIsOpen={ openContactIsOpen }
                      setSelectedContact={ setSelectedContact } />
        <NewContact newContactIsOpen={ newContactIsOpen }
                    handleOpenCloseNewContact={ handleOpenCloseNewContact }
                    setNewContactIsOpen={ setNewContactIsOpen }
                    setContactsList={ setContactsList } />
        <OpenContact openContactIsOpen={ openContactIsOpen }
                    setOpenContactIsOpen={ setOpenContactIsOpen }
                    selectedContact={ selectedContact } />
      </div>
    );
};

export default App;
