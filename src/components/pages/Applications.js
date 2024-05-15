import AccNavigation from "../accNavigation/AccNavigation";
import AppHeader from "../appHeader/AppHeader";
import AccApplications from "../accApplications/AccApplications"

const Applications = (props) => {
    return (
        <>
            <AppHeader/>
            <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                <AccNavigation userRole={props.userRole}/>
                <AccApplications userRole={props.userRole}/>
            </div>
        </>
    )
}

export default Applications;