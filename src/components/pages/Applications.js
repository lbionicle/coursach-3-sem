import AccNavigation from "../accNavigation/AccNavigation";
import AppHeader from "../appHeader/AppHeader";
import AccApplications from "../accApplications/AccApplications"
import AppNotFound from "../appNotFound/AppNotFound";

const Applications = (props) => {
    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppHeader/>
                    <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                        <AccNavigation userRole={props.userRole}/>
                        <AccApplications userRole={props.userRole}/>
                    </div>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default Applications;