const DetailsBox = ({ title, info }) => {
    return (
        <div className="details-box">
            <h2 className="details-box-title">
                { title }
            </h2>
            <p className="details-box__info">{ info === '' ? 'Your note...' : info }</p>
        </div>
    );
};
 
export default DetailsBox;