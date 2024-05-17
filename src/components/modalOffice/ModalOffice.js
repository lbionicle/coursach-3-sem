import "./modalOffice.scss"

const ModalOffice = (props) => {

    return (
        <div className="modal" id="modalOffice" tabindex="-1" aria-labelledby="modalOfficeLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body">
                        <div style={{cursor: "pointer", top: "10px", right: "20px", borderRadius : "0.3rem"}} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close"><i className="bi fa-lg bi-x-lg"></i></div>
                        <div className="modal-body-office col-12">
                            {props.userRole === "User" ? <UserModal/> : <AdminModal/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserModal = () => {
    return (
        <>
            <div id="carouselIndicators" className="carousel carousel-dark slide col-12" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block w-100" alt="..."/>
                    </div>
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
                <h6>
                    Тип объекта: Офис<br/>
                    Площадь общая: 150 - 5500 м²<br/>
                    Этаж / этажность: 1 / 5<br/>
                    Год постройки: 2022<br/>
                    Класс: A<br/>
                    Раздельных помещений: 1 - 20<br/>
                    Материал стен: Кирпичный<br/>
                    Высота потолков: 4 м<br/>
                    Ремонт: Евроремонт<br/>
                    Отопление: Есть<br/>
                    Электроснабжение: Есть<br/>
                    Естественное освещение: Есть<br/>
                    Вода: Есть<br/>
                </h6>
            </div>
            <div className="modal-body-description col-12 pt-2">
                <h5>Описание:</h5>
                <h6>
                    Аренда офисов в бизнес-центре в классическом архитектурном стиле по адресу ул. Захарова, 42 в Минске. Отделка завершена.
                    Аренда помещений под офис возможна от 150 кв.м. до 5500 кв.м.

                    По отделке предлагаем законченный ремонт включая:
                    полы бетонные
                    свет
                    сан.узлы
                    вентиляция приточно-вытяжная
                    кондиционеры
                    покраска стен
                    вводные щиты
                    пожарная сигнализация
                    высокие потолки
                    окна 3,5 — 4 м. высотой

                    Отделка:
                    оптоволокно
                    отопление
                    розетки
                    кондиционирование
                    сан.узлы
                    подвод коммуникаций для кухни
                    душевые
                    высокие окна (стеклопакеты)

                    Плюсы объекта:
                    своя закрытая парковка на ~40 машиномест
                    5 минут до парка Горького и аттракционов
                    2 крытых велопарковки
                    5 минут пешком до метро пл. Победы
                    5 минут до супермаркета Щедрый, Каравай и Радзивиловский, в пешей доступности больше 5 кафе (Берёзка, Золотой гребешок, Моби Дик, FreshCafe, Скиф, Sushi House, Лазия и пр.)
                    возможность благоустройства территории у зданий (велопарковки, беседки, качели, организация спорт. турников для сотрудников)

                    Общественный транспорт:
                    Метро: пл. Победы
                    Трамваи: 1, 4, 7
                    Автобусы: 18, 26, 37, 39, 100, 111
                    Маршрутки: 1063-ТК, 1064-ТК, 1076-ТК, 1119-ТК, 1151-ТК, 1152-ТК, 1280-ТК, 1318-ТК

                    Дополнительные расходы:
                    аренда машиноместа
                    эксплуатационные расходы
                    коммунальные расходы (выставляются по потреблению)

                    Стеклянные перегородки и доп. ремонт возможен за счет арендатора.
                </h6>
            </div>
            <div className="modal-body-controls pt-3">
                <div style={{fontWeight: 500}} className="btn btn-outline-dark modal-controls-send py-2 me-2">
                    Отправить заявку
                </div>
                <div className="btn btn-outline-dark modal-controls-addoffice py-2">
                    <i className="bi fa-lg bi-star"></i>
                </div>
            </div>
        </>
    )
}

const AdminModal = () => {

    return (
        <>
            <p>Удалить фото</p>
            <div className="images d-flex flex-wrap">
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
                <img src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" className="d-block col-2 me-2 mt-2" alt="..."/>
            </div>
            <form id="updateModal" action="" method="post" className="mt-2">
                <div className="modal-body-images">
                    <label htmlFor="formFileMultiple" className="form-label">Добавить фото</label>
                    <input className="form-control" name="images" type="file" id="formFileMultiple" multiple/>
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
                <div className="modal-body-controls mt-3">
                    <button type="submit" class="btn btn-success">Сохранить изменения</button>
                </div>
            </form>
        </>
    )
}

export default ModalOffice;