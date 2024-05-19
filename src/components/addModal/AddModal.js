import "./addModal.scss"

const AddModal = (props) => {

    return (
        <>
            <div className="modal" id="modalAdd" tabindex="-1" aria-labelledby="modalAddLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div style={{cursor: "pointer", top: "10px", right: "20px", borderRadius : "0.3rem"}} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close"><i className="bi fa-lg bi-x-lg"></i></div>
                            <div className="modal-body-add col-12">
                                {props.response === "Office" ? <AddOffice/> : <AddUser/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const AddOffice = () => {

    return (
        <>
            <div className="images d-flex flex-wrap">
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
            </div>
            <form id="addOffice" action="" method="post" className="mt-2">
                <div className="modal-body-images">
                    <label htmlFor="formFileMultiple" className="form-label">Добавить фото <span className="text-danger">*</span></label>
                    <input className="form-control" name="images" type="file" id="formFileMultiple" required multiple/>
                </div>
                <div className="modal-body-options my-2">
                    <label for="input-name" class="form-label">Название <span className="text-danger">*</span></label>
                    <input class="form-control" type="text" name="name" id="input-name" required></input>
                </div>
                <div className="modal-body-options">
                    <label for="textarea-options" class="form-label">Параметры объекта <span className="text-danger">*</span></label>
                    <textarea class="form-control" name="options" id="textarea-options" rows="10" required></textarea>
                </div>
                <div className="modal-body-description my-2">
                    <label for="textarea-description" class="form-label">Описание <span className="text-danger">*</span></label>
                    <textarea class="form-control" name="description" id="textarea-description" rows="10" required></textarea>
                </div>
                <div className="modal-body-options">
                    <label for="input-price" class="form-label">Цена<span className="text-danger">*</span></label>
                    <input class="form-control" type="number" name="price" id="input-price" required></input>
                </div>
                <div className="modal-body-controls col-12 mt-3">
                    <button type="submit" class="btn btn-success col-12">Добавить</button>
                </div>
            </form>
        </>
    )
}

const AddUser = () => {

    return (
        <>
            <form className="d-flex flex-wrap justify-content-between" id="addUser" action="" method="post">
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
                <div className="form-controls text-center col-12 mt-4 px-2">
                    <button className="btn btn-submit btn-success text-center col-12" type="submit">Добавить</button>
                </div>
            </form>
        </>
    )
}

export default AddModal