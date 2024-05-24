import React, { useEffect, useState } from "react";
import useServices from "../../services/Services";
import ModalUser from "../modalUser/ModalUser";
import AddModal from "../addModal/AddModal";
import Spinner from "../spinner/Spinner";

import "./accUsersList.scss";

const AccUsersList = () => {
    const { getUsers, deleteUserById } = useServices();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        setLoading(true);
        getUsers().then(data => {
            if (data.message) {
                setUsers([]);
            } else {
                setUsers(data);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error fetching users:", err);
            setLoading(false);
        });
    };

    const handleDeleteUser = (userId) => {
        deleteUserById(userId).then(() => {
            alert("Пользователь удален");
            fetchUsers();
        }).catch(err => {
            console.error("Error deleting user:", err);
        });
    };

    const getStatusClass = (blocked) => {
        return blocked ? "text-danger" : "text-success";
    };

    const getStatusText = (blocked) => {
        return blocked ? "Заблокирован" : "Разблокирован";
    };

    const handleOpenModal = (userId) => {
        setSelectedUserId(userId);
    };

    return (
        <div className="users col-12 col-md-7 col-xxl-8 my-4 my-sm-1 my-lg-3 my-xl-4">
            <div className="btn btn-outline-dark user-add col-12 py-1 rounded-0" data-bs-toggle="modal" data-bs-target="#modalAdd">
                <i className="bi bi-plus-lg"></i>
            </div>
            {loading ? (
                <div className="text-center mt-4">
                    <Spinner />
                </div>
            ) : (
                users.length === 0 ? (
                    <div className="text-center mt-4">
                        <h5>Пользователей нет</h5>
                    </div>
                ) : (
                    users.map(user => (
                        <div key={user.id} className="users-wrapper wrapper col-12 mt-2">
                            <div className="wrapper-user col-12 d-flex flex-wrap align-items-start justify-content-between">
                                <div className="wrapper-user-id col-12 col-md-6 col-xxl-1 py-2 py-xxl-0 px-2">
                                    <h6>Id:</h6>
                                    <h5>{user.id}</h5>  
                                </div>
                                <div className="wrapper-user-email col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                                    <h6>Почта:</h6>
                                    <h5>{user.email}</h5>
                                </div>
                                <div className="wrapper-user-phone col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2">
                                    <h6>Моб. тел:</h6>
                                    <h5>{user.tel}</h5>
                                </div>
                                <div className={`wrapper-user-activity col-12 col-md-6 col-xxl-3 py-2 py-xxl-0 px-2 ${getStatusClass(user.blocked)}`}>
                                    <h6>Статус:</h6>
                                    <h5>{getStatusText(user.blocked)}</h5>
                                </div>
                                <div className="wrapper-user-controls text-center col-12 col-xxl-2 py-2 py-xxl-0 px-2 d-flex align-items-start justify-content-center">
                                    <div className="btn btn-change-user btn-outline-dark col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0" data-bs-toggle="modal" data-bs-target="#modalUser" onClick={() => handleOpenModal(user.id)}>
                                        <i className="bi fa-lg bi-sliders2"></i>
                                    </div>
                                    <div className="btn btn-delete-user btn-outline-danger col-2 col-xxl-5 mx-2 mx-xxl-1 py-3 rounded-0" onClick={() => handleDeleteUser(user.id)}>
                                        <i className="bi fa-lg bi-trash3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            )}
            <ModalUser userId={selectedUserId} fetchUsers={fetchUsers} />
            <AddModal fetchUsers={fetchUsers} response={"Users"}/>

        </div>
    );
};

export default AccUsersList;
