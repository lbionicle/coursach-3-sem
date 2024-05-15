import "./appHeader.scss"

import logo from "../../resources/icons/chatbot-logo.svg"

const AppHeader = () => {

    return (
        <div className="header col-11 m-auto py-4">
            <img src={logo} alt="logo" />
        </div>
    )
}

export default AppHeader;