import "./modalOffice.scss"

const ModalOffice = () => {

    return (
        <div class="modal" id="modalOffice" tabindex="-1" aria-labelledby="modalOfficeLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-body">
                    <div style={{cursor: "pointer", top: "10px", right: "20px", borderRadius : "0.5rem"}} className="btn btn-outline-dark position-absolute" data-bs-dismiss="modal" aria-label="close"><i class="bi fa-lg bi-x-lg"></i></div>
                    <div className="modal-body-office col-12">
                        <div className="modal-body-photo">
                                <img className="img-fluid" src="https://mykaleidoscope.ru/uploads/posts/2021-03/1615549314_9-p-krasivii-ofis-10.jpg" alt="" />
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
                                <i class="bi fa-lg bi-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalOffice;