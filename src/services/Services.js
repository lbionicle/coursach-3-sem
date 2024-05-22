import { useNavigate } from "react-router-dom";

const useServices = () => {
    const _apiBase = "http://192.168.0.106:8000";

    const navigate = useNavigate();

    const getResources = async (url) => {
        let res = await fetch(url);

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
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return method !== 'DELETE' ? await res.json() : { message: 'Удалено' };
    };

    const register = (json) => {
        sendData(`${_apiBase}/reg`, json, "POST")
            .then(json => {
                if (typeof json === "string") {
                    localStorage.setItem("token", json);
                    navigate("/main-page");
                } else {
                    alert(json.detail);
                }
            })
            .catch(err => console.error("Error during registration:", err));
    };

    const login = (json) => {
        sendData(`${_apiBase}/login`, json, "POST")
            .then(json => {
                if (typeof json === "string") {
                    localStorage.setItem("token", json);
                    navigate("/main-page");
                } else {
                    alert(json.detail);
                }
            })
            .catch(err => console.error("Error during login:", err));
    };

    const getUserByToken = (token) => {
        return getResources(`${_apiBase}/users/${token}`);
    };

    const updateUserByToken = (token, json) => {
        sendData(`${_apiBase}/users/${token}`, json, "PUT")
            .then(json => {
                json.message ? alert(json.message) : alert(json.detail);
            })
            .catch(err => console.error("Error during update:", err));
    };

    const deleteUserByToken = (token) => {
        sendData(`${_apiBase}/users/${token}`, null, "DELETE")
            .then(json => {
                json.message ? alert(json.message) : alert(json.detail);
            })
            .catch(err => console.error("Error during delete:", err));
    };

    const addOffice = async (json) => {
        const newOffice = await sendData(`${_apiBase}/office`, json, "POST");
        if (!newOffice.detail) {
            alert("Офис добавлен");
            return newOffice;
        } else {
            alert(newOffice.detail);
        }
    };

    const getOffices = () => {
        return getResources(`${_apiBase}/office`);
    };

    const getOfficeById = async (id) => {
        return await getResources(`${_apiBase}/office/${id}`);
    }

    const addOfficeToFavorite = async (token, id) => {
        return await getResources(`${_apiBase}/user/${token}/favorite/${id}`);
    }

    const deleteOfficeById = (id) => {
        sendData(`${_apiBase}/office/${id}`, null, "DELETE")
    };

    const updateOfficeById = (id, json) => {
        sendData(`${_apiBase}/office/${id}`, json, "PUT")
            .then(json => {
                json.message ? alert(json.message) : alert(json.detail);
            })
            .catch(err => console.error("Error during update:", err));
    };

    const getFavoriteOffices = (token) => {
        return getResources(`${_apiBase}/user/${token}/favorite`);
    };

    const addFavoriteOffice = (token, officeId) => {
        return sendData(`${_apiBase}/user/${token}/favorite/${officeId}`, {}, 'POST');
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
        addFavoriteOffice
    };
};

export default useServices;