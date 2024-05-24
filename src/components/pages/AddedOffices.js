import React, { useEffect, useState } from 'react';
import AppHeader from "../appHeader/AppHeader";
import AccNavigation from "../accNavigation/AccNavigation";
import AccOffices from "../accOffices/AccOffices";
import ModalOffice from "../modalOffice/ModalOffice";
import AddModal from "../addModal/AddModal";
import AppNotFound from "../appNotFound/AppNotFound";
import useServices from "../../services/Services";

const AddedOffices = (props) => {
    const { getOffices } = useServices();
    const [offices, setOffices] = useState([]);
    const [addedOffice, setAddedOffice] = useState(false);

    useEffect(() => {
        fetchOffices();
    }, []);

    const fetchOffices = () => {
        getOffices().then(data => setOffices(data));
        setAddedOffice(prev => !prev)
    };

    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppHeader/>
                    <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                        <AccNavigation userRole={props.userRole}/>
                        <AccOffices fetchOffices={fetchOffices} addedOffice={addedOffice} offices={offices} setOffices={setOffices} userRole={props.userRole}/>
                    </div>
                    <AddModal response={"Office"} fetchOffices={fetchOffices} />
                </>
                :
                <AppNotFound/>
            }
        </>  
    );
};

export default AddedOffices;
