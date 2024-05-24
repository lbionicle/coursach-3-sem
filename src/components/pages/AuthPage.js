import AuthUser from "../authUser/AuthUser";

const AuthPage = ({ setUserRole }) => {
    return (
        <>
            <AuthUser setUserRole={setUserRole} />
        </>
    );
}

export default AuthPage;
