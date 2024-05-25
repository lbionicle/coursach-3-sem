import AuthUser from "../authUser/AuthUser";

const AuthPage = ({ onLogin }) => {
    return (
        <>
            <AuthUser onLogin={onLogin}/>
        </>
    );
}

export default AuthPage;
