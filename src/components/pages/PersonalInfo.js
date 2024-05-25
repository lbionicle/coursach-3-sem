import AppHeader from "../appHeader/AppHeader";
import AccNavigation from "../accNavigation/AccNavigation";
import AccPersonalInfo from "../accPersonalInfo/AccPersonalInfo"
import AppNotFound from "../appNotFound/AppNotFound";

const PersonalInfo = ({onLogout, userRole}) => {
    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppHeader/>
                    <div className="d-flex flex-wrap justify-content-between align-items-start col-11 m-auto">
                        <AccNavigation onLogout={onLogout} userRole={userRole}/>
                        <AccPersonalInfo/>
                    </div>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default PersonalInfo;