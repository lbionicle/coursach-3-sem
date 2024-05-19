import "./appHeader.scss"

import logo from "../../resources/icons/chatbot-logo.svg"
import { Link } from "react-router-dom";

const AppHeader = () => {

    return (
        <div className="header col-11 m-auto py-4">
            <Link to={"/main-page"}>
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}

export default AppHeader;