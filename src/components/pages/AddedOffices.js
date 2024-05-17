import AppHeader from "../appHeader/AppHeader";
import AccNavigation from "../accNavigation/AccNavigation";
import AccOffices from "../accOffices/AccOffices"
import ModalOffice from "../modalOffice/ModalOffice";
import AddModal from "../addModal/AddModal";

const AddedOffices = (props) => {
    return (
        <>
            <AppHeader/>
            <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                <AccNavigation userRole={props.userRole}/>
                <AccOffices userRole={props.userRole}/>
            </div>
            <ModalOffice userRole={props.userRole}/>
            <AddModal response={"Office"}/>
        </>  
    )
}

export default AddedOffices;