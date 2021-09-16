import "../../assets/css/layout.css";
import "./Header.css";

const Header = (props) => {
    return (
        <>
            <div className="header flex-container justify-center align-content-center">
                <div className="flex-container header__navigation-button">nav</div>

                <h2 className="header__heading">{props.heading}</h2>

                <div className="flex-container header__actions">actions</div>
            </div>
        </>
    );
};

export default Header;