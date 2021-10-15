import { AiFillMessage, AiFillPhone, AiFillVideoCamera,  } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';

const OptionsBox = () => {

    const options = [
        { id : 0, title : 'message', icon : <AiFillMessage /> },
        { id : 1, title : 'call', icon : <AiFillPhone /> },
        { id : 2, title : 'video', icon : <AiFillVideoCamera /> },
        { id : 3, title : 'mail', icon : <FaEnvelope /> }
    ];

    return (
        <div className="options-box">
            { options.map(option => (
                <div className="options-box__option" 
                        key={ option.id }>
                        <span className="options-box__icon">
                            { option.icon }
                        </span>
                        <p className="options-box__title">
                            { option.title }
                        </p>
                </div>
            )) }
        </div>
    );
    
};
 
export default OptionsBox;