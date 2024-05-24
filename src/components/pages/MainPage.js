import AppChat from "../appChat/AppChat"
import AppNavbar from "../appNavbar/AppNavbar"
import AppNotFound from "../appNotFound/AppNotFound"

const MainPage = ({useRole}) => {

    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppNavbar/>
                    <AppChat userRole={useRole}/>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default MainPage