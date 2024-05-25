import React from 'react';
import { useState, useEffect } from 'react';

import useServices from '../../services/Services';
import Spinner from '../spinner/Spinner';
import ModalOffice from '../modalOffice/ModalOffice';

import ReactStringReplace from 'react-string-replace';

import "./accOffices.scss";

const AccOffices = ({ addedOffice, userRole, offices, setOffices, fetchOffices }) => {
    return userRole === "User" ? (
        <UserOffices setOffices={setOffices} />
    ) : (
        <AdminOffices setOffices={setOffices} />
    );
};

const UserOffices = ({ setOffices }) => {
    const { getFavoriteOffices, getOfficeById, deleteFavoriteOffice } = useServices();
    const [loading, setLoading] = useState(true);
    const [offices, setLocalOffices] = useState([]);
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [selectedOfficeId, setSelectedOfficeId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const userToken = localStorage.getItem("token");

    useEffect(() => {
        fetchUserOffices();
    }, []);

    const fetchUserOffices = () => {
        setLoading(true);
        getFavoriteOffices(userToken)
            .then(data => {
                const officePromises = data.map(officeId => getOfficeById(officeId));
                return Promise.all(officePromises);
            })
            .then(officesData => {
                setLocalOffices(officesData);
                setOffices(officesData);
                setFilteredOffices(officesData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching user offices:", err);
                setLoading(false);
            });
    };

    const handleDelete = (officeId) => {
        setLoading(true);
        deleteFavoriteOffice(userToken, officeId)
            .then(() => {
                alert("Офис удалён из добавленных")
                setLocalOffices(prevOffices => prevOffices.filter(office => office.id !== officeId));
                setFilteredOffices(prevOffices => prevOffices.filter(office => office.id !== officeId));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error deleting office:", err);
                setLoading(false);
            });
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase().replace(/[-\s]/g, "");
        setSearchQuery(query);
        if (query === "") {
            setFilteredOffices(offices);
        } else {
            setFilteredOffices(offices.filter(office => 
                office.name.toLowerCase().replace(/[-\s]/g, "").includes(query)
            ));
        }
    };

    const highlightText = (text, highlight) => {
        if (!highlight.trim()) {
            return text;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        return ReactStringReplace(text, regex, (match, i) => (
            <span key={i} style={{ backgroundColor: "orange" }}>{match}</span>
        ));
    };

    return (
        <div className="office col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <input
                type="text"
                className="form-control mb-2 rounded-0"
                placeholder="Поиск по имени"
                value={searchQuery}
                onChange={handleSearch}
            />
            {loading ? (
                <div className='text-center py-3'>
                    <Spinner />
                </div>
            ) : filteredOffices.length === 0 ? (
                <div className='wrapper text-center py-3'>
                    <h4>Офисов нет</h4>
                </div>
            ) : (
                filteredOffices.map((office) => (
                    <div className="offices-wrapper wrapper col-12 mt-2" key={office.id}>
                        <div className="wrapper-office col-12 d-flex flex-wrap">
                            <div className="wrapper-office-photo col-12 col-xxl-2">
                                <img className="img-fluid" src={office.photos[0]} alt="Office" />
                            </div>
                            <div className="wrapper-office-name col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Название:</h6>
                                <h5>{highlightText(office.name, searchQuery)}</h5>
                            </div>
                            <div className="wrapper-office-description col-12 col-xxl-4 py-2 px-xxl-2 py-xxl-0">
                                <h6>Адрес:</h6>
                                <h5>{highlightText(office.address, searchQuery)}</h5>
                            </div>
                            <div className="wrapper-office-price col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Цена:</h6>
                                <h5><span>{office.price}</span> BYN</h5>
                            </div>
                            <div className="wrapper-office-controls col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0 text-center d-flex align-items-start justify-content-center">
                                <div className="btn btn-outline-dark col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalOffice" onClick={() => setSelectedOfficeId(office.id)}>
                                    <i className="bi fa-lg bi-eye"></i>
                                </div>
                                <div onClick={() => {handleDelete(office.id)}} className="btn btn-delete-office btn-outline-danger col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0">
                                    <i className="bi fa-lg bi-trash3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <ModalOffice fetchOffices={fetchUserOffices} officeId={selectedOfficeId} userRole="User" />
        </div>
    );
};


const AdminOffices = ({ setOffices }) => {
    const { getOffices, deleteOfficeById } = useServices();
    const [loading, setLoading] = useState(true);
    const [offices, setLocalOffices] = useState([]);
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [selectedOfficeId, setSelectedOfficeId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchAdminOffices();
    }, []);

    const fetchAdminOffices = () => {
        setLoading(true);
        getOffices()
            .then(data => {
                setLocalOffices(data);
                setOffices(data);
                setFilteredOffices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching offices:", err);
                setLoading(false);
            });
    };

    const handleDelete = (officeId) => {
        setLoading(true);
        deleteOfficeById(officeId)
            .then(() => {
                setLocalOffices(prevOffices => prevOffices.filter(office => office.id !== officeId));
                setFilteredOffices(prevOffices => prevOffices.filter(office => office.id !== officeId));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error deleting office:", err);
                setLoading(false);
            });
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase().replace(/[-\s]/g, "");
        setSearchQuery(query);
        if (query === "") {
            setFilteredOffices(offices);
        } else {
            setFilteredOffices(offices.filter(office => 
                office.name.toLowerCase().replace(/[-\s]/g, "").includes(query)
            ));
        }
    };

    const highlightText = (text, highlight) => {
        if (!highlight.trim()) {
            return text;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        return ReactStringReplace(text, regex, (match, i) => (
            <span key={i} style={{ backgroundColor: "orange" }}>{match}</span>
        ));
    };

    return (
        <div className="office col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <input
                type="text"
                className="form-control mb-2 rounded-0"
                placeholder="Поиск по имени"
                value={searchQuery}
                onChange={handleSearch}
            />
            <div className={`btn btn-outline-dark office-add col-12 py-1 rounded-0 ${loading ? 'disabled' : ''}`} data-bs-toggle="modal" data-bs-target="#modalAdd">
                <i className="bi bi-plus-lg"></i>
            </div>
            {loading ? (
                <div className='text-center py-3'>
                    <Spinner />
                </div>
            ) : filteredOffices.length === 0 ? (
                <div className='wrapper text-center py-3'>
                    <h4>Список офисов пуст</h4>
                </div>
            ) : (
                filteredOffices.map((office) => (
                    <div className="offices-wrapper wrapper col-12 mt-2" key={office.id}>
                        <div className="wrapper-office col-12 d-flex flex-wrap">
                            <div className="wrapper-office-photo col-12 col-xxl-2">
                                <img className="img-fluid" src={office.photos[0]} alt="Office" />
                            </div>
                            <div className="wrapper-office-name col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Название:</h6>
                                <h5>{highlightText(office.name, searchQuery)}</h5>
                            </div>
                            <div className="wrapper-office-description col-12 col-xxl-4 py-2 px-xxl-2 py-xxl-0">
                                <h6>Адрес:</h6>
                                <h5>{highlightText(office.address, searchQuery)}</h5>
                            </div>
                            <div className="wrapper-office-price col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0">
                                <h6>Цена:</h6>
                                <h5><span>{office.price}</span> BYN</h5>
                            </div>
                            <div className="wrapper-office-controls col-12 col-xxl-2 py-2 px-xxl-2 py-xxl-0 text-center d-flex align-items-start justify-content-center">
                                <div className="btn btn-outline-dark col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalOffice" onClick={() => setSelectedOfficeId(office.id)}>
                                    <i className="bi fa-lg bi-sliders2"></i>
                                </div>
                                <div onClick={() => { handleDelete(office.id) }} className="btn btn-delete-office btn-outline-danger col-2 col-md-2 col-xxl-4 mx-2 py-3 rounded-0">
                                    <i className="bi fa-lg bi-trash3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <ModalOffice fetchOffices={fetchAdminOffices} officeId={selectedOfficeId} userRole="Admin" />
        </div>
    );
};

export default AccOffices;
