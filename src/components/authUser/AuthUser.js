import { useState } from "react";
import "./authUser.scss"

const AuthUser = () => {
    const [stage, setStage] = useState("login")

    return (
        <div className="auth-wrapper">
            <div className="auth-container col-11 col-lg-4 rounded-2">
                <div className="switch-page d-flex flex-wrap justify-content-center text-center mb-3 mb-lg-4">
                    <div
                        style={{cursor : "pointer"}}    
                        className={`fs-5 ${stage === "login" ? "text-success" : ""}`}
                        onClick={() => setStage("login")}    
                    >Логин</div>
                    <div className="mx-2 fs-5">/</div>
                    <div
                        style={{cursor : "pointer"}}
                        className={`fs-5 ${stage === "register" ? "text-success" : ""}`}
                        onClick={() => setStage("register")}    
                    >Регистрация</div>
                </div>
                {stage === "login" ? <Login/> : <Register/>}
            </div>
        </div>
    )
}

const Login = () => {
    return (
        <form id="login-user" action="" method="post">
            <label htmlFor="email">Почта <span className="text-danger">*</span></label>
            <input name="email" className="form-control" type="email" placeholder="Example@gmail.com" required/>
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
    )
}

const Register = () => {
    return (
        <form id="reg-user" action="" method="post">
            <label htmlFor="lastName">Фамилия <span className="text-danger">*</span></label>
            <input name="lastName" className="form-control" type="text" placeholder="Иванов" required/>
            <label htmlFor="firstName">Имя <span className="text-danger">*</span></label>
            <input name="firstName" className="form-control" type="text" placeholder="Иван" required/>
            <label htmlFor="telephone">Номер <span className="text-danger">*</span></label>
            <input
                name="telephone"
                className="form-control"
                type="tel"
                pattern="[3][7][5][0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                placeholder="375-XX-XXX-XX-XX"
                required
                />
            <label htmlFor="age">Возраст <span className="text-danger">*</span></label>
            <input name="age" className="form-control" type="number" placeholder="XX" minLength={1} maxLength={3} required/>
            <label htmlFor="email">Почта <span className="text-danger">*</span></label>
            <input name="email" className="form-control" type="email" placeholder="Example@gmail.com" required/>
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
                <button className="btn btn-submit btn-success col-8 col-xxl-5 text-center" type="submit">Зарегистрироваться</button>
            </div>
        </form>
    )
}

export default AuthUser;