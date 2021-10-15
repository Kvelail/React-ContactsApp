import { BsPersonPlusFill } from 'react-icons/bs';

const AddContact = ({ handleOpenCloseNewContact, buttonRef }) => {

    return (
        <div className="add-contact">
            <button type="button" 
                    className="add-contact__btn"
                    onClick={ handleOpenCloseNewContact }
                    ref={ buttonRef } >
                <BsPersonPlusFill />
            </button>
        </div>
    );
    
};
 
export default AddContact;