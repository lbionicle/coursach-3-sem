import React, { useEffect, useState } from 'react';
import useServices from '../../services/Services';
import Spinner from '../spinner/Spinner';
import ModalOffice from '../modalOffice/ModalOffice';
import "./accOffices.scss";

const AccOffices = ({ addedOffice, userRole, offices, setOffices, fetchOffices }) => {
    const { getOffices, getFavoriteOffices, deleteOfficeById, getOfficeById } = useServices();
    const [loading, setLoading] = useState(true);
    const [selectedOfficeId, setSelectedOfficeId] = useState(null);
    const userToken = localStorage.getItem("token");

    useEffect(() => {
        onRequest();
    }, [addedOffice, userRole]);

    const onRequest = () => {
        setLoading(true);
        if (userRole === "User") {
            getFavoriteOffices(userToken)
                .then(data => {
                    const officePromises = data.map(officeId => getOfficeById(officeId));
                    return Promise.all(officePromises);
                })
                .then(officesData => {
                    setOffices(officesData);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching user offices:", err);
                    setLoading(false);
                });
        } else {
            getOffices()
                .then(data => {
                    setOffices(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching offices:", err);
                    setLoading(false);
                });
        }
    };

    const handleDelete = (officeId) => {
        setOffices(prevOffices => prevOffices.filter(office => office.id !== officeId));
        deleteOfficeById(officeId);
    };

    return (
        <div className="office col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            {userRole !== "User" && (
                <div className={`btn btn-outline-dark office-add col-12 py-1 rounded-0 ${loading ? 'disabled' : ''}`} data-bs-toggle="modal" data-bs-target="#modalAdd">
                    <i className="bi bi-plus-lg"></i>
                </div>
            )}
            {loading ? (
                <div className='text-center py-3'>
                    <Spinner />
                </div>
            ) : offices.length === 0 ? (
                <div className='wrapper text-center py-3'>
                    <h4>{userRole === "User" ? "Добавленных офисов нет" : "Список офисов пуст"}</h4>
                </div>
            ) : (
                offices?.map((office) => (
                    <div className="offices-wrapper wrapper col-12 mt-2" key={office.id}>
                        <div className="wrapper-office col-12 d-flex flex-wrap">
                            <div className="wrapper-office-photo col-12 col-xxl-2">
                                <img className="img-fluid" src={office.photos[0]} alt="Office" />
                            </div>
                            <div className="wrapper-office-name col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Название:</h6>
                                <h5>{office.name}</h5>
                            </div>
                            <div className="wrapper-office-description col-12 col-xxl-4 py-2 px-xxl-2 py-xxl-0">
                                <h6>Адрес:</h6>
                                <h5>{office.address}</h5>
                            </div>
                            <div className="wrapper-office-price col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Цена:</h6>
                                <h5><span>{office.price}</span> BYN</h5>
                            </div>
                            <div className="wrapper-office-controls col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0 text-center d-flex align-items-start justify-content-center">
                                <div className="btn btn-outline-dark col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalOffice" onClick={() => setSelectedOfficeId(office.id)}>
                                    <i className={`bi fa-lg ${userRole === "User" ? "bi-eye" : "bi-sliders2"}`}></i>
                                </div>
                                {userRole !== "User" && (
                                    <div onClick={() => { handleDelete(office.id) }} className="btn btn-delete-office btn-outline-danger col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0">
                                        <i className="bi fa-lg bi-trash3"></i>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            )}
            <ModalOffice fetchOffices={fetchOffices} officeId={selectedOfficeId} userRole={userRole} />
        </div>
    );
};

export default AccOffices;
