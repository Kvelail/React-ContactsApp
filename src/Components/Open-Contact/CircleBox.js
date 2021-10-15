import { useEffect, useState } from "react";

const CircleBox = ({ selectedContact }) => {

    const [circleAbb, setCircleAbb] = useState('');

    useEffect(() => {

        const nameArr = selectedContact.name.split(' ');

        let nameAbb = nameArr[0][0];

        if (nameArr.length > 1) nameAbb += nameArr[1][0];
            
        setCircleAbb(nameAbb);

    }, [selectedContact]);

    return (
        <div className="circle-box">
            <div className="circle-box__circle">
                <p className="circle-box__circle-abb">
                    { circleAbb }
                </p>
            </div>
            <h2 className="circle-box__name">{ selectedContact.name }</h2>
        </div>
    );
    
};
 
export default CircleBox;