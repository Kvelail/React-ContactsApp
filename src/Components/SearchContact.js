import { FaSearch } from 'react-icons/fa';

const SearchContact = ({ setSerachTerm }) => {
    return (
        <div className="search-contact">
            <form className="search-contact__form">
                <span className="search-contact__icon">
                    <FaSearch />
                </span>
                <input type="text" 
                       placeholder="Search"
                       className="search-contact__input"
                       onChange={ e => setSerachTerm(e.target.value) } />
            </form>
        </div>
    );
};
 
export default SearchContact;