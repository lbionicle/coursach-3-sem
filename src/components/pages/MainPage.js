import AppChat from "../appChat/AppChat"
import AppNavbar from "../appNavbar/AppNavbar"
import AppNotFound from "../appNotFound/AppNotFound"

const MainPage = () => {

    return (
        <>
            {localStorage.getItem("token") ? 
                <>
                    <AppNavbar/>
                    <AppChat/>
                </>
                :
                <AppNotFound/>
            }
        </>
    )
}

export default MainPage