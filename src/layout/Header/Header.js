import "../../assets/css/layout.css";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Header = (props) => {
    let navRef = useRef(null);

    return (
      <div className="header flex-container justify-center align-content-center">
                <div ref={navRef}
                     className="flex-container header__navigation-button-container">
                    <button type="button" className="header__navigation-button">
                        <FontAwesomeIcon icon={faBars} size="lg"/>
                    </button>
                </div>

                <h2 className="header__heading">{props.heading}</h2>

                <div className="flex-container header__actions-container">
                    <button type="button" className="header__navigation-actions">
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                </div>
            </div>
    );
};

export default Header;
