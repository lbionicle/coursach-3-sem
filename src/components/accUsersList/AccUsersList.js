import "./accUsersList.scss"

const AccUsersList = () => {

    return (
        <div className="users-wrapper wrapper col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <div className="wrapper-user col-12 d-flex flex-wrap align-items-start justify-content-between">
                <div className="wrapper-user-id col-12 col-md-6 col-xxl-1 py-2 py-xxl-0 px-2">
                    <h6>Id:</h6>
                    <h5>1</h5>  
                </div>
                <div className="wrapper-user-email col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Почта:</h6>
                    <h5>Example@gmail.com</h5>
                </div>
                <div className="wrapper-user-phone col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Моб. тел:</h6>
                    <h5>+375292417581</h5>
                </div>
                <div className="wrapper-user-activity col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Статус:</h6>
                    <h5>Заблокирован</h5>
                </div>
                <div className="wrapper-user-controls text-center col-12 col-xxl-2 py-2 py-xxl-0 px-2 d-flex align-items-start justify-content-center">
                    <div className="btn btn-outline-dark col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0"><i class="bi fa-lg bi-sliders2"></i></div>
                    <div className="btn btn-delete-office btn-outline-dark col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0"><i className="bi fa-lg bi-trash3"></i></div>
                </div>
            </div>
            <div className="wrapper-user col-12 d-flex flex-wrap align-items-start justify-content-between">
                <div className="wrapper-user-id col-12 col-md-6 col-xxl-1 py-2 py-xxl-0 px-2">
                    <h6>Id:</h6>
                    <h5>1</h5>  
                </div>
                <div className="wrapper-user-email col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Почта:</h6>
                    <h5>Example@gmail.com</h5>
                </div>
                <div className="wrapper-user-phone col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Моб. тел:</h6>
                    <h5>+375292417581</h5>
                </div>
                <div className="wrapper-user-activity col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                    <h6>Статус:</h6>
                    <h5>Заблокирован</h5>
                </div>
                <div className="wrapper-user-controls text-center col-12 col-xxl-2 py-2 py-xxl-0 px-2 d-flex align-items-start justify-content-center">
                    <div className="btn btn-outline-dark col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0"><i class="bi fa-lg bi-sliders2"></i></div>
                    <div className="btn btn-delete-office btn-outline-dark col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0"><i className="bi fa-lg bi-trash3"></i></div>
                </div>
            </div>
        </div>
    )
}

export default AccUsersList;