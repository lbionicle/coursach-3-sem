import AppHeader from "../appHeader/AppHeader"
import AccNavigation from "../accNavigation/AccNavigation"
import AccUsersList from "../accUsersList/AccUsersList"
import ModalUser from "../modalUser/ModalUser"
import AddModal from "../addModal/AddModal"

const Users = (props) => {

    return (
        <>
            <AppHeader/>
            <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                <AccNavigation userRole={props.userRole}/>
                <AccUsersList/>
            </div>
            <ModalUser/>
            <AddModal response={"Users"}/>
        </>
    )
}

export default Users;