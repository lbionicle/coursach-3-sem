import "./accOffices.scss"

const AccOffices = (props) => {

    return (
        <div className="office col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <div className="btn btn-outline-dark office-add col-12 py-1 rounded-0" data-bs-toggle="modal" data-bs-target="#modalAdd"><i class="bi bi-plus-lg"></i></div>
            <div className="offices-wrapper wrapper col-12 mt-2">
                <div className="wrapper-office col-12 d-flex flex-wrap">
                    <div className="wrapper-office-photo col-12 col-xxl-2">
                        <img className="img-fluid" src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" alt="" />
                    </div>
                    <div className="wrapper-office-name col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                        <h6>Название:</h6>
                        <h5>Офис Диджител</h5>
                    </div>
                    <div className="wrapper-office-description col-12 col-xxl-4 py-2 px-xxl-2 py-xxl-0">
                        <h6>Описание:</h6>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                    <div className="wrapper-office-price col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                        <h6>Цена за м²:</h6>
                        <h5><span>49-65</span> BYN</h5>
                    </div>
                    <div className="wrapper-office-controls col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0 text-center d-flex align-items-start justify-content-center">
                        {props.userRole === "User" ?
                        <>
                            <div className="btn btn-outline-dark col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalOffice"><i class="bi fa-lg bi-eye"></i></div>
                        </>
                        :
                        <>
                            <div className="btn btn-outline-dark col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalOffice"><i class="bi fa-lg bi-sliders2"></i></div>
                        </>
                        }
                        <div className="btn btn-delete-office btn-outline-danger col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0"><i className="bi fa-lg bi-trash3"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccOffices;