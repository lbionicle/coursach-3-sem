import "./accApplications.scss"

const AccApplications = (props) => {

    return (
        <div className="application-wrapper wrapper col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <div className="wrapper-application col-12 d-flex flex-wrap align-items-start justify-content-between">
                <div className="wrapper-application-id col-5 col-xxl-1 pe-2 pb-2">
                    <h6>ID:</h6>
                    <h5>12312</h5>
                </div>
                <div className="wrapper-application-lastName col-7 col-xxl-2 pe-2 pb-2">
                    <h6>Фамилия:</h6>
                    <h5>Иванов</h5>
                </div>
                <div className="wrapper-application-firstName col-5 col-xxl-1 pe-2 pb-2">
                    <h6>Имя:</h6>
                    <h5>Иван</h5>
                </div>
                <div className="wrapper-application-phone col-7 col-xxl-2 pe-2 pb-2">
                    <h6>Моб. тел:</h6>
                    <h5><a style={{textDecoration : "underline"}} href="tel: +375292417581">+375292417581</a></h5>
                </div>
                <div className="wrapper-application-office col-5 col-xxl-1 pe-2 pb-2">
                    <h6>Офис:</h6>
                    <h5 style={{textDecoration : "underline"}}>123321</h5>
                </div>
                {props.userRole === "User" ? 
                    <>
                        <div className="wrapper-application-status col-7 col-xxl-3 pe-2 pb-2">
                            <h6>Статус:</h6>
                            <h5 style={{textDecoration : "underline"}}>В рассмотрении</h5>
                        </div>
                        <div className="wrapper-application-controls col-12 col-xxl-1 text-start">
                            <div className="btn btn-outline-danger my-2 rounded-0 col-12 col-xxl-8"><i className="bi fa-lg bi-x-lg"></i></div>
                        </div>
                    </>
                    :
                    <>
                        <div className="wrapper-application-controls col-7 col-xxl-3 text-start text-xxl-center py-2">
                            <div className="btn btn-submit-application btn-outline-success rounded-0 col-4 col-sm-3 col-xxl-4"><i style={{fontSize : "1.4em", lineHeight: ".09em", verticalAlign : "-0.1em"}} className="bi fa-lg bi-check2"></i></div>
                            <div className="btn btn-cancel-application btn-outline-danger rounded-0 col-4 col-sm-3 col-xxl-4 ms-2"><i className="bi fa-lg bi-x-lg"></i></div>
                        </div>
                    </>
                }
            </div>
        </div> 
    )
}

export default AccApplications;