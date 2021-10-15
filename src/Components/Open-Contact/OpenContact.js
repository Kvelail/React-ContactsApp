import { BiLeftArrowCircle } from 'react-icons/bi';
import CircleBox from './CircleBox';
import DetailsBox from './DetailsBox';
import OptionsBox from './OptionsBox';

const OpenContact = ({ openContactIsOpen, setOpenContactIsOpen, selectedContact }) => {

    const handleCloseOpenContact = e => {
        if (e.target.className === 'open-contact open') setOpenContactIsOpen(false);
    };

    return (
        <div className={ openContactIsOpen ? 'open-contact open' : 'open-contact' }
             onClick={ handleCloseOpenContact } >
            <div className="open-contact__box">
                <div className="open-contact__header">
                    <button type="button" 
                            className="open-contact__btn"
                            onClick={ () => setOpenContactIsOpen(false) }>
                        <BiLeftArrowCircle size="2rem" 
                                           style={{ marginRight : '.3rem'}} /> 
                                           contacts
                    </button>
                </div>
                <CircleBox selectedContact={ selectedContact } />
                <OptionsBox />
                <DetailsBox title="phone" info={ selectedContact.phone } />
                <DetailsBox title="note" info={ selectedContact.note } />
            </div>
        </div>
    );

};
 
export default OpenContact;