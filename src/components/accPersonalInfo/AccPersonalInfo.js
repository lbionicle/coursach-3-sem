
import "./accPersonalInfo.scss"

const AccPersonalInfo = () => {

    return (
        <div className="personal-wrapper wrapper col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <form className="d-flex flex-wrap justify-content-between" id="personalInfo" action="" method="post">
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="lastName">Фамилия <span className="text-danger">*</span></label>
                    <input name="lastName" className="form-control col-12" type="text" placeholder="Иванов" required/>
                </div>
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="firstName">Имя <span className="text-danger">*</span></label>
                    <input name="firstName" className="form-control col-12" type="text" placeholder="Иван" required/>
                </div>
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="telephone">Номер <span className="text-danger">*</span></label>
                    <input
                        name="telephone"
                        className="form-control col-12"
                        type="tel"
                        pattern="[3][7][5]-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        placeholder="375-XX-XXX-XX-XX"
                        required
                        />
                </div>
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="age">Возраст <span className="text-danger">*</span></label>
                    <input name="age" className="form-control col-12" type="number" placeholder="XX" minLength={1} maxLength={3} required/>
                </div>
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="email">Почта <span className="text-danger">*</span></label>
                    <input name="email" className="form-control col-12" type="email" placeholder="Example@gmail.com" required/>
                </div>
                <div className="input-container col-12 col-md-5 col-xxl-4 p-2">
                    <label htmlFor="password">Пароль <span className="text-danger">*</span></label>
                    <input
                        name="password"
                        className="form-control col-12"
                        type="password"
                        minLength={8}
                        maxLength={16}
                        placeholder="Пароль"
                        required
                    />
                </div>
                <div className="form-controls text-center col-12 col-md-5 col-xxl-4 mt-4 px-2">
                    <button className="btn btn-submit btn-success text-center col-12" type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    )
}

export default AccPersonalInfo;