import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import AccNavigation from "../accNavigation/AccNavigation";
import AccOffices from "../accOffices/AccOffices";
import ModalOffice from "../modalOffice/ModalOffice";
import AddModal from "../addModal/AddModal";
import AppNotFound from "../appNotFound/AppNotFound";

const AddedOffices = (props) => {
    
    const [offices, setOffices] = useState([]);
    const [addedOffice, setAddedOffice] = useState(false);

    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppHeader/>
                    <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                        <AccNavigation userRole={props.userRole}/>
                        <AccOffices addedOffice={addedOffice} offices={offices} setOffices={setOffices} userRole={props.userRole}/>
                    </div>
                    <ModalOffice offices={offices} userRole={props.userRole} />
                    <AddModal setAddedOffice={setAddedOffice} response={"Office"} />
                </>
                :
                <AppNotFound/>
            }
        </>  
    );
};

export default AddedOffices;
