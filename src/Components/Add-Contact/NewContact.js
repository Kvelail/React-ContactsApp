import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NewContact = ({ newContactIsOpen, 
                      setNewContactIsOpen, 
                      handleOpenCloseNewContact,
                      setContactsList  }) => {

    const handleCloseNewContact = e => {
        if (e.target.className === 'new-contact open') setNewContactIsOpen(false);
    }

    const [inputValues, setInputValues] = useState({
        name : '',
        phone : '',
        note : ''
    });

    const handleSubmit = e => {

        e.preventDefault();

        const newContact = {
            id : uuidv4(), 
            name : inputValues.name.trim(), 
            phone : inputValues.phone.trim(), 
            note : inputValues.note.trim()
        };

        setContactsList(prevContactsList => [newContact, ...prevContactsList]);

        setNewContactIsOpen(false);

        setInputValues({
            name : '',
            phone : '',
            note : ''
        });

    };
    
    return (
        <div className={ newContactIsOpen ? 'new-contact open' : 'new-contact' } 
             onClick={ handleCloseNewContact }>
            <div className="new-contact__box">
                <div className="new-contact__header">
                    <button type="button"
                            className="new-contact__btn"
                            onClick={ handleOpenCloseNewContact }>
                        cancel
                    </button>
                    <h2 className="new-contact__heading">new contact</h2>
                    <button type="submit"
                            className="new-contact__btn"
                            form="linkForm">
                        done
                    </button>
                </div>
                <form className="new-contact__form" 
                      id="linkForm"
                      onSubmit={ handleSubmit }>
                    <input type="text"
                        placeholder="Name"
                        className="new-contact__input"
                        required
                        value={ inputValues.name }
                        onChange={ e => setInputValues(prevValues => ({
                            ...prevValues,
                            name : e.target.value
                        })) } />
                    <input type="number"
                        placeholder="Phone"
                        className="new-contact__input"
                        required
                        value={ inputValues.phone }
                        onChange={ e => setInputValues(prevValues => ({
                            ...prevValues,
                            phone : e.target.value
                        })) } />
                    <input type="text"
                        placeholder="Note"
                        className="new-contact__input"
                        value={ inputValues.note }
                        onChange={ e => setInputValues(prevValues => ({
                            ...prevValues,
                            note : e.target.value
                        })) } />
                </form>
            </div>
        </div>
    );
};
 
export default NewContact;