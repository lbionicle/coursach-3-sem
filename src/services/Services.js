
const useServices = () => {
    const _apiBase = "http://192.168.100.9:8000";

    const getResources = async (url) => {
        let res = await fetch(url, {headers: new Headers({'Content-Type': 'application/json', 'x-admin-token': localStorage.getItem("token")})});

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    const sendData = async (url, data, method) => {
        const res = await fetch(url, {
            method: method,
            body: method !== 'DELETE' ? JSON.stringify(data) : null,
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-admin-token': localStorage.getItem("token")
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return method !== 'DELETE' ? await res.json() : { message: 'Удалено' };
    };

    const register = (json) => {
        return sendData(`${_apiBase}/reg`, json, "POST")
    };

    const login = (json) => {
        return sendData(`${_apiBase}/login`, json, "POST")
    };

    const addOfficeToFavorite = async (token, id) => {
        return await getResources(`${_apiBase}/user/${token}/favorite/${id}`);
    }

    const addOffice = async (json) => {
        const newOffice = await sendData(`${_apiBase}/office`, json, "POST");
        if (!newOffice.detail) {
            alert("Офис добавлен");
            return newOffice;
        } else {
            alert(newOffice.detail);
        }
    };

    const addFavoriteOffice = (token, officeId) => {
        return sendData(`${_apiBase}/user/${token}/favorite/${officeId}`, {}, 'POST');
    };

    const addApplications = (token, officeId) => {
        return sendData(`${_apiBase}/applications/${token}/${officeId}`, {}, 'POST');
    }

    const getOffices = () => {
        return getResources(`${_apiBase}/office`);
    };

    const getOfficeById = (id) => {
        return getResources(`${_apiBase}/office/${id}`);
    }

    const getApplications = () => {
        return getResources(`${_apiBase}/applications`);
    }

    const getApplicationsByToken = (token) => {
        return getResources(`${_apiBase}/user/${token}/applications`);
    }

    const getUserByToken = (token) => {
        return getResources(`${_apiBase}/users/${token}`);
    };

    const getFavoriteOffices = (token) => {
        return getResources(`${_apiBase}/user/${token}/favorite`);
    };

    const getUsers = () => {
        return getResources(`${_apiBase}/users`);
    }

    const getUserById = (id) => {
        return getResources(`${_apiBase}/users/id/${id}`);
    }

    const getOfficeByOptions = (json) => {
        return sendData(`${_apiBase}/office/search`, json, 'POST');
    }

    const getRoleByToken = (token) => {
        return getResources(`${_apiBase}/users/${token}/role`);
    }

    const searchUsersByPhone = (phone) => {
        return getResources(`${_apiBase}/users/search/${phone}`);
    }

    const searchOffices = (query) => {
        return getResources(`${_apiBase}/offices/search/${query}`);
    }

    const updateOfficeById = async(id, json) => {
        return await sendData(`${_apiBase}/office/${id}`, json, "PUT")
    };

    const updateUserByToken = (token, json) => {
        sendData(`${_apiBase}/users/${token}`, json, "PUT")
            .then(json => {
                json.message ? alert(json.message) : alert(json.detail);
            })
            .catch(err => console.error("Error during update:", err));
    };

    const updateApplication = (appId, statusId) => {
        return sendData(`${_apiBase}/applications/${appId}/${statusId}`, {}, "PUT")
            .then(response => {
                return response;
            }).catch(err => {
                console.error("Error updating application:", err);
                throw err;
            });
    };

    const updateUserById = (id, json) => {
        return sendData(`${_apiBase}/users/id/${id}`, json, "PUT")
    };    

    const deleteOfficeById = (id) => {
        return sendData(`${_apiBase}/office/${id}`, null, "DELETE")
    };

    const deleteFavoriteOffice = (token, officeId) => {
        return sendData(`${_apiBase}/user/${token}/favorite/${officeId}`, null, "DELETE")
    }

    const deleteUserByToken = (token) => {
        sendData(`${_apiBase}/users/${token}`, null, "DELETE")
            .then(json => {
                json.message ? alert(json.message) : alert(json.detail);
            })
            .catch(err => console.error("Error during delete:", err));
    };

    const deleteUserById = (id) => {
        return sendData(`${_apiBase}/users/id/${id}`, null, "DELETE")
    }

    const deleteApplicationById = (app_id) => {
        return sendData(`${_apiBase}/applications/${app_id}`, null, "DELETE")
    }

    const downloadReport = async () => {
        const response = await fetch(`${_apiBase}/export/report/pdf`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
                'x-admin-token': localStorage.getItem("token")
            }
        });

        if (!response.ok) {
            throw new Error('Could not fetch report');
        }

        const blob = await response.blob();
        return blob;
    };

    return {
        login,
        register,
        getUserByToken,
        updateUserByToken,
        deleteUserByToken,
        addOffice,
        getOffices,
        deleteOfficeById,
        updateOfficeById,
        getOfficeById,
        addOfficeToFavorite,
        getFavoriteOffices,
        addFavoriteOffice,
        getApplications,
        addApplications,
        updateApplication,
        getUsers,
        getUserById,
        updateUserById,
        deleteUserById,
        getOfficeByOptions,
        getRoleByToken,
        getApplicationsByToken,
        deleteApplicationById,
        deleteFavoriteOffice,
        searchUsersByPhone,
        searchOffices,
        downloadReport
    };
};

export default useServices;