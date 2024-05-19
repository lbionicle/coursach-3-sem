
import "./appNavbar.scss"

import logo from "../../resources/icons/chatbot-logo.svg"
import { Link } from "react-router-dom"

const AppNavbar = () => {

    return (
        <>
            <nav style={{zIndex : 100, backgroundColor : "#fff"}} className="navbar navbar-expand-lg col-12 pt-3 pb-3 position-fixed top-0">
                <div className="wrapper-navbar col-11 m-auto">
                    <div className="d-flex flex-wrap justify-content-between align-items-center col-12">
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bi fa-2x bi-list"></i></div>
                        <div className="collapse navbar-collapse mt-3 mt-lg-0 justify-content-end" id="navbarNav">
                            <ul className="navbar-nav col-12 col-lg-6">
                                <li style={{cursor : "pointer"}} className="col-12 col-lg-3 ms-lg-auto mb-3 mb-lg-0 text-end" data-bs-toggle="modal" data-bs-target="#manager">Контакты менеджеров</li>
                                <li className="col-12 col-lg-3 text-end">
                                    <Link to={"/personal-account/personal-info"}>Личный кабинет</Link>
                                </li>                        
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <ModalManager/>
        </>
    )
}

const ModalManager = () => {

    return (
        <div class="modal fade" id="manager" tabindex="-1" aria-labelledby="managerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div style={{padding : "40px 20px 30px 20px"}} class="modal-body d-flex flex-column">
                    <div style={{cursor: "pointer", top: "15px", right: "15px", border : "none"}} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close"><i className="bi fa-lg bi-x-lg"></i></div>
                    <h5 class="modal-title text-dark mb-1">Контакты менеджеров:</h5>
                    <a className="mb-1" href="tel: +375292417582">+375-29-24-17-582</a>
                    <a className="mb-1" href="tel: +375292417586">+375-29-24-17-586</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AppNavbar