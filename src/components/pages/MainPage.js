import AppChat from "../appChat/AppChat"
import AppNavbar from "../appNavbar/AppNavbar"
import AppNotFound from "../appNotFound/AppNotFound"

const MainPage = ({userRole}) => {

    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppNavbar/>
                    <AppChat userRole={userRole}/>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default MainPage