import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../services/Services";
import "./authUser.scss";

const AuthUser = ({ setUserRole }) => {
    const [stage, setStage] = useState("login");
    const { login, register } = useServices();
    
    const navigate = useNavigate();

    const regUser = (e) => {
        e.preventDefault();
        
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.age = +data.age;
        console.log(data);
        register(data)
        .then(json => {
            if (!json.detail) {
                localStorage.setItem("token", json.token);
                setUserRole(json.admin ? "Admin" : "User");
                navigate("/main-page");
            } else {
                alert(json.detail);
            }
        })
        .catch(err => console.error("Error during registration:", err));
    };

    const loginUser = (e) => {
        e.preventDefault();
        
        const data = Object.fromEntries(new FormData(e.target).entries());
        login(data)
        .then(json => {
            if (!json.detail) {
                localStorage.setItem("token", json.token);
                setUserRole(json.admin ? "Admin" : "User");
                navigate("/main-page");
            } else {
                alert(json.detail);
            }
        })
        .catch(err => console.error("Error during login:", err));
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-container col-11 col-lg-4 rounded-2">
                <div className="switch-page d-flex flex-wrap justify-content-center text-center mb-3 mb-lg-4">
                    <div
                        style={{ cursor: "pointer" }}    
                        className={`fs-5 ${stage === "login" ? "text-success" : ""}`}
                        onClick={() => setStage("login")}    
                    >Логин</div>
                    <div className="mx-2 fs-5">/</div>
                    <div
                        style={{ cursor: "pointer" }}
                        className={`fs-5 ${stage === "register" ? "text-success" : ""}`}
                        onClick={() => setStage("register")}    
                    >Регистрация</div>
                </div>
                {stage === "login" ? <Login loginUser={loginUser} /> : <Register regUser={regUser} />}
            </div>
        </div>
    );
};

const Login = (props) => {
    return (
        <form onSubmit={props.loginUser} id="login-user" action="" method="post">
            <label htmlFor="email">Почта <span className="text-danger">*</span></label>
            <input name="email" className="form-control" type="email" placeholder="Example@gmail.com" required />
            <label htmlFor="password">Пароль <span className="text-danger">*</span></label>
            <input
                name="password"
                className="form-control"
                type="password"
                minLength={8}
                maxLength={16}
                placeholder="Пароль"
                required
            />
            <div className="form-controls w-100 text-center mt-4">
                <button className="btn btn-submit btn-success col-8 col-xxl-5 text-center" type="submit">Войти</button>
            </div>
        </form>
    );
};

const Register = (props) => {
    return (
        <form onSubmit={props.regUser} id="reg-user" action="" method="post">
            <label htmlFor="lastName">Фамилия <span className="text-danger">*</span></label>
            <input name="lastName" className="form-control" type="text" placeholder="Иванов" required />
            <label htmlFor="firstName">Имя <span className="text-danger">*</span></label>
            <input name="firstName" className="form-control" type="text" placeholder="Иван" required />
            <label htmlFor="telephone">Номер <span className="text-danger">*</span></label>
            <input
                name="tel"
                className="form-control"
                type="tel"
                pattern="[3][7][5]-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="375-XX-XXX-XX-XX"
                required
            />
            <label htmlFor="age">Возраст <span className="text-danger">*</span></label>
            <input name="age" className="form-control" type="number" placeholder="XX" minLength={1} maxLength={3} required />
            <label htmlFor="email">Почта <span className="text-danger">*</span></label>
            <input name="email" className="form-control" type="email" placeholder="Example@gmail.com" required />
            <label htmlFor="password">Пароль <span className="text-danger">*</span></label>
            <input
                name="password"
                className="form-control"
                type="password"
                minLength={8}
                maxLength={16}
                placeholder="Пароль"
                required
            />
            <div className="form-controls w-100 text-center mt-4">
                <button className="btn btn-submit btn-success col-9 col-xxl-5 text-center" type="submit">Зарегистрироваться</button>
            </div>
        </form>
    );
};

export default AuthUser;
