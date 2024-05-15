import { NavLink } from "react-router-dom"

import "./accNavigation.scss"

const AccNavigation = (props) => {

    return (
        <>
            {props.userRole === "User" ? <UserNavigation/> : <AdminNavigation/>}
        </>
    )
}

const UserNavigation = () => {
    return (
        <ul className="list-group list-group-flush col-12 col-md-4 col-xxl-3 my-1 my-lg-3 my-xl-4">
            <NavLink to={"/personal-account/personal-info"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-person me-1"></i>Персональная информация</li>
            )}
            </NavLink>
            <NavLink to={"/personal-account/personal-offices"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-star me-1"></i>Добавленные офисы</li>
            )}  
            </NavLink>
            <NavLink to={"/personal-account/personal-applications"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-card-text me-1"></i>Заявки</li>
            )}
            </NavLink>
            <NavLink to={"/"}>
                <li style={{border : "none"}} className="list-group-item text-danger"><i className="bi fa-lg bi-box-arrow-right me-1"></i>Выйти</li>
            </NavLink>
        </ul>
    )
}

const AdminNavigation = () => {
    return (
        <ul className="list-group list-group-flush col-12 col-md-4 col-xxl-3 my-1 my-lg-3 my-xl-4">
            <NavLink to={"/personal-account/personal-info"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-person me-1"></i>Персональная информация</li>
            )}
            </NavLink>
            <NavLink to={"/personal-account/personal-offices"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-star me-1"></i>Добавленные офисы</li>
            )}  
            </NavLink>
            <NavLink to={"/personal-account/personal-applications"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-card-text me-1"></i>Заявки</li>
            )}
            </NavLink>
            <NavLink to={"/personal-account/personal-users"}>
            {({ isActive }) => (
                <li className={isActive ? "list-group-item list-active" : "list-group-item"}><i className="bi fa-lg bi-people me-1"></i>Пользователь</li>
            )}
            </NavLink>
            <li className="list-group-item download-report"><i className="bi fa-lg bi-filetype-xlsx me-1"></i>Выгрузить отчёт</li>
            <NavLink to={"/"}>
                <li style={{border : "none"}} className="list-group-item text-danger"><i className="bi fa-lg bi-box-arrow-right me-1"></i>Выйти</li>
            </NavLink>
        </ul>
    )
}

export default AccNavigation;