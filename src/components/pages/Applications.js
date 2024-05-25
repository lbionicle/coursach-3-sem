import AccNavigation from "../accNavigation/AccNavigation";
import AppHeader from "../appHeader/AppHeader";
import AccApplications from "../accApplications/AccApplications"
import AppNotFound from "../appNotFound/AppNotFound";

const Applications = ({userRole, onLogout}) => {
    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppHeader/>
                    <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                        <AccNavigation onLogout={onLogout} userRole={userRole}/>
                        <AccApplications userRole={userRole}/>
                    </div>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default Applications;