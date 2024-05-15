import AppHeader from "../appHeader/AppHeader";
import AccNavigation from "../accNavigation/AccNavigation";
import AccPersonalInfo from "../accPersonalInfo/AccPersonalInfo"

const PersonalInfo = (props) => {
    return (
        <>
            <AppHeader/>
            <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                <AccNavigation userRole={props.userRole}/>
                <AccPersonalInfo/>
            </div>
        </>
    )
}

export default PersonalInfo;