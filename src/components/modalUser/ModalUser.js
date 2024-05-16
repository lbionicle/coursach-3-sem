
import "./modalUser.scss"

const ModalUser = () => {
    return (
        <div class="modal" id="modalUser" tabindex="-1" aria-labelledby="modalUserLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-body">
                    <div style={{cursor: "pointer", top: "10px", right: "20px", borderRadius : "0.5rem"}} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close"><i class="bi fa-lg bi-x-lg"></i></div>
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
                                pattern="[3][7][5][0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
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
                        <div className="btn-group input-container col-12 p-2 text-center" role="group">
                            <div type="button" className="btn btn-outline-success col-6">Разблокирован</div>
                            <div type="button" className="btn btn-outline-danger col-6">Заблокирован</div>
                        </div>
                        <div className="form-controls text-center col-12 mt-4 px-2">
                            <button className="btn btn-submit btn-success text-center col-12" type="submit">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalUser;