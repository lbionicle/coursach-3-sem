import React, { useEffect, useState, useRef } from 'react';
import useServices from '../../services/Services';
import "./modalOffice.scss";
import Spinner from '../spinner/Spinner';

const ModalOffice = ({ officeId, userRole }) => {
    const [officeInfo, setOfficeInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favoriteOffices, setFavoriteOffices] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const { getOfficeById, getFavoriteOffices, addFavoriteOffice } = useServices();
    const userToken = localStorage.getItem("token");

    useEffect(() => {
        if (officeId) {
            setLoading(true);
            getOfficeById(officeId).then(data => {
                setOfficeInfo(data);
                setLoading(false);
            }).catch(err => {
                console.error("Error fetching office:", err);
                setLoading(false);
            });
        }
    }, [officeId]);

    useEffect(() => {
        if (userToken) {
            getFavoriteOffices(userToken).then(data => {
                setFavoriteOffices(data);
            }).catch(err => {
                console.error("Error fetching favorite offices:", err);
            });
        }
    }, [userToken]);

    useEffect(() => {
        if (officeInfo && favoriteOffices) {
            setIsFavorite(favoriteOffices.some(office => office.id === officeInfo.id));
        }
    }, [officeInfo, favoriteOffices]);

    const handleSendRequest = () => {
        alert("Заявка отправлена");
    };

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            addFavoriteOffice(userToken, officeInfo.id).then(() => {
                setIsFavorite(true);
                alert("Добавлено в избранное");
            }).catch(err => {
                console.error("Error adding to favorites:", err);
            });
        }
    };

    return (
        <div className="modal" id="modalOffice" tabIndex="-1" aria-labelledby="modalOfficeLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body">
                        <div style={{ cursor: "pointer", top: "10px", right: "20px", borderRadius: "0.3rem" }} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close">
                            <i className="bi fa-lg bi-x-lg"></i>
                        </div>
                        {loading ? (
                            <div className='text-center py-3'>
                                <Spinner/>
                            </div>
                        ) : (
                            <div className="modal-body-office col-12">
                                {userRole === "User" ? (
                                    <UserModal
                                        officeInfo={officeInfo}
                                        onSendRequest={handleSendRequest}
                                        onAddToFavorites={handleAddToFavorites}
                                        isFavorite={isFavorite}
                                    />
                                ) : (
                                    <AdminModal officeInfo={officeInfo} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserModal = ({ officeInfo, onSendRequest, onAddToFavorites, isFavorite }) => {
    return (
        <>
            <div id="carouselIndicators" className="carousel carousel-dark slide col-12" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {officeInfo.photos.map((photo, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={photo} className="d-block w-100" alt={`Office ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <div className="modal-body-options col-12 pt-2 pb-2">
                <h5>Параметры объекта:</h5>
                <h6>{officeInfo.options}</h6>
            </div>
            <div className="modal-body-description col-12 pt-2">
                <h5>Описание:</h5>
                <h6>{officeInfo.description}</h6>
            </div>
            <div className="modal-body-details col-12 pt-2">
                <h5>Детали:</h5>
                <h6>Площадь: {officeInfo.area} м²</h6>
                <h6>Цена: {officeInfo.price} BYN</h6>
                <h6>Адрес: {officeInfo.address}</h6>
            </div>
            <div className="modal-body-controls pt-3">
                <div
                    style={{ fontWeight: 500 }}
                    className="btn btn-outline-dark modal-controls-send py-2 me-2"
                    onClick={onSendRequest}
                >
                    Отправить заявку
                </div>
                <div
                    className={`btn modal-controls-addoffice py-2 ${isFavorite ? 'btn-warning disabled' : 'btn-outline-dark'}`}
                    onClick={onAddToFavorites}
                >
                    <i className="bi fa-lg bi-star"></i>
                </div>
            </div>
        </>
    );
};

const AdminModal = ({ officeInfo }) => {
    const { updateOfficeById } = useServices();
    const [updatedOffice, setUpdatedOffice] = useState(officeInfo);
    const [photos, setPhotos] = useState([]);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setUpdatedOffice(officeInfo);
        setPhotos(officeInfo.photos.map(photo => ({ base64: photo, name: photo })));
    }, [officeInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedOffice(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            if (file.type.startsWith('image/') && (file.type.endsWith('jpeg') || file.type.endsWith('jpg') || file.type.endsWith('png'))) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPhotos(prevPhotos => [...prevPhotos, { base64: reader.result, name: file.name }]);
                };
                reader.readAsDataURL(file);
            } else {
                alert("Можно добавлять только изображения форматов .png, .jpg, .jpeg.");
                fileInputRef.current.value = "";
            }
        });
    };

    const handleRemovePhoto = (photoToRemove) => {
        setPhotos(photos.filter(photo => photo !== photoToRemove));
        const files = Array.from(fileInputRef.current.files);
        const updatedFiles = new DataTransfer();

        files.forEach(file => {
            if (file.name !== photoToRemove.name) {
                updatedFiles.items.add(file);
            }
        });

        fileInputRef.current.files = updatedFiles.files;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = { ...updatedOffice, photos: photos.map(photo => photo.base64) };
        updateOfficeById(updatedData.id, updatedData);
    };

    return (
        <>
            <p>Удалить фото</p>
            <div className="images d-flex flex-wrap">
                {photos.map((photo, index) => (
                    <div key={index} className="image-wrapper">
                        <img
                            src={photo.base64}
                            className="d-block col-2 me-2 mt-2"
                            alt={photo.name}
                        />
                        <div className="overlay" onClick={() => handleRemovePhoto(photo)}>
                            <i className="bi bi-trash3 delete-icon"></i>
                        </div>
                    </div>
                ))}
            </div>
            <form id="updateModal" onSubmit={handleSubmit} className="mt-2">
                <div className="modal-body-images">
                    <label htmlFor="formFileMultiple" className="form-label">Добавить фото</label>
                    <input className="form-control" name="photos" type="file" id="formFileMultiple" accept=".png, .jpg, .jpeg" multiple onChange={handleFileChange} ref={fileInputRef} />
                </div>
                <div className="modal-body-options my-2">
                    <label htmlFor="input-name" className="form-label">Название <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" name="name" id="input-name" value={updatedOffice.name} onChange={handleChange} required />
                </div>
                <div className="modal-body-options">
                    <label htmlFor="textarea-options" className="form-label">Параметры объекта <span className="text-danger">*</span></label>
                    <textarea className="form-control" name="options" id="textarea-options" rows="10" value={updatedOffice.options} onChange={handleChange} required></textarea>
                </div>
                <div className="modal-body-description my-2">
                    <label htmlFor="textarea-description" className="form-label">Описание <span className="text-danger">*</span></label>
                    <textarea className="form-control" name="description" id="textarea-description" rows="10" value={updatedOffice.description} onChange={handleChange} required></textarea>
                </div>
                <div className="modal-body-area">
                    <label htmlFor="input-area" className="form-label">Площадь<span className="text-danger">*</span></label>
                    <input className="form-control" type="number" step="any" name="area" id="input-area" value={updatedOffice.area} onChange={handleChange} required />
                </div>
                <div className="modal-body-price my-2">
                    <label htmlFor="input-price" className="form-label">Цена<span className="text-danger">*</span></label>
                    <input className="form-control" type="number" step="any" name="price" id="input-price" value={updatedOffice.price} onChange={handleChange} required />
                </div>
                <div className="modal-body-controls col-12 mt-3">
                    <button type="submit" className="btn btn-success col-12">Сохранить изменения</button>
                </div>
            </form>
        </>
    );
};

export default ModalOffice;
