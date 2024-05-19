
import { useEffect, useRef, useState } from "react"

import "./appChat.scss"

const AppChat = () => {

    const FAQ = {
        "Могу ли я посмотреть офис перед арендой?" : " Да, мы всегда рекомендуем нашим клиентам лично осмотреть офис перед принятием окончательного решения об аренде. Это поможет вам лучше понять, подходит ли вам это пространство.",
        "Что произойдет, если я захочу расторгнуть договор аренды досрочно?" : "Условия досрочного расторжения договора аренды обычно указываются в самом договоре. Они могут варьироваться, поэтому важно внимательно прочитать договор перед подписанием.",
        "Могу ли я переоборудовать офис под свои нужды?" : "В большинстве случаев арендаторы могут вносить изменения в офисное пространство, но это обычно требует согласования с арендодателем и может потребовать дополнительных затрат.",
        "Какие дополнительные расходы могут возникнуть при аренде офиса?" : "Помимо арендной платы, могут возникнуть дополнительные расходы, такие как коммунальные услуги, страхование, налоги, обслуживание и ремонт. Эти детали обычно указываются в договоре аренды.",
        "Что делать, если у меня возникнут проблемы с офисом после начала аренды?" : "Если у вас возникнут проблемы с офисом после начала аренды, например, неисправности в системе кондиционирования или проблемы с интернет-соединением, свяжитесь с нами, и мы поможем вам решить эти проблемы.",
        "Какие услуги включены в стоимость аренды?" : "Стоимость аренды обычно включает основную арендную плату, обслуживание и уборку общих помещений, а также некоторые коммунальные услуги. Однако детали могут варьироваться в зависимости от договора аренды.",
        "Можно ли арендовать офис на короткий срок?" : "Да, мы предлагаем гибкие условия аренды, включая краткосрочную аренду. Пожалуйста, укажите ваши требования, и я помогу вам найти подходящие варианты.",
        "Какие документы мне нужны для аренды офиса?" : "Обычно вам потребуется предоставить документы, подтверждающие вашу личность и регистрацию бизнеса, а также финансовую информацию о вашей компании. Однако требования могут варьироваться.",
        "Что делать, если я хочу изменить условия аренды?" : "Если вы хотите изменить условия аренды, например, продлить срок аренды или изменить размер офиса, свяжитесь с нами, и мы обсудим возможные варианты.",
        "Что включено в площадь офиса?" : "Площадь офиса обычно включает рабочие места, переговорные комнаты, кухню и санузлы. Однако планировка может варьироваться в зависимости от конкретного офиса.",
    }

    const [chatMessages, setChatMessages] = useState(null);
    const [buttons, setButtons] = useState(null);
    const [currentMessage, setCurrentMessage] = useState('');

    const typingRef = useRef(false);
    const clickedFAQ = useRef([]);
    const chatWindowRef = useRef(null);

    useEffect(() => {
        if (!chatMessages) {
            setBaseMessages()
            setBaseButtons()
        }
    }, [])

    useEffect(() => {
        if (chatWindowRef.current) {
            const element = chatWindowRef.current;
            const totalHeight = element.scrollHeight;
            let currentScrollTop = element.scrollTop;
            const scrollStep = (totalHeight - currentScrollTop) / 20;
    
            function animateScroll() {
                currentScrollTop += scrollStep;
                element.scrollTop = currentScrollTop;
                if (currentScrollTop < totalHeight) {
                    window.requestAnimationFrame(animateScroll);
                }
            }
    
            window.requestAnimationFrame(animateScroll);
        }
    }, [chatMessages]);

    useEffect(() => {
        let timerId;
        if (typingRef.current) {
            if (currentMessage.length < FAQ[clickedFAQ.current[clickedFAQ.current.length - 1]].length) {
                timerId = setTimeout(() => {
                    setCurrentMessage(FAQ[clickedFAQ.current[clickedFAQ.current.length - 1]].slice(0, currentMessage.length + 1));
                }, 30);
            } else {
                typingRef.current = false;
                setChatMessages(chatMessages => {
                    const newChatMessages = [...chatMessages];
                    newChatMessages[newChatMessages.length - 1] = renderMessage([{role : "Chat", message : currentMessage}])[0];
                    return newChatMessages;
                });
            }
        }
        return () => clearTimeout(timerId);
    }, [typingRef.current, currentMessage]);

    const setBaseMessages = () => {
        setChatMessages(renderMessage([{role : "Chat", message : "Приветствую! Я AKAIRY, ваш помощник в сфере аренды офисной недвижимости. Мне приятно помочь вам найти идеальное рабочее пространство, которое соответствует вашим потребностям и бюджету."}]))
    }

    const setBaseButtons = () => {
        setButtons(renderButtons(["Поиск подходящего офиса", "FAQ"]))   
    }

    const renderMessage = (arr) => {
        const items = arr.map(({role, message}, i) => {
            if (message) {
                return (
                    <>
                        {role === "User" ? <div key={i + "_" + new Date().getTime()} className="alert alert-success col-12 text-end">{message}</div> : <div key={i + "_" + new Date().getTime()} className="alert alert-light col-12 text-start">{message}</div>}
                    </>
                )
            }
        })
    
        return items;
    }
    
    const renderButtons = (arr) => {
        const items = arr.map((text, i) => {
            return (
                <div style={{pointerEvents: typingRef.current ? 'none' : 'auto'}} key={i + "__" + new Date().getTime()} onClick={algorithms} className={`btn btn-outline-dark col-12 col-xl-3 m-2`}>{text}</div>
            )
        })
    
        return items;
    }

    const algorithms = (e) => {
        if (typingRef.current) return;
        
        const text = e.target.textContent

        switch(text) {
            case "Выйти" : {
                setBaseButtons()
                setChatMessages(chatMessages => [...chatMessages, ...renderMessage([{role : "User", message : "Выйти."}])]);
                clickedFAQ.current = []
                break;
            }
            case "FAQ" : {
                setButtons(renderButtons([...Object.keys(FAQ), "Выйти"]))
                setChatMessages(chatMessages => [...chatMessages, ...renderMessage([{role : "User", message : "FAQ"}, {role : "Chat", message : "Выберите вопрос:"}])]);
                break;
            }
            case "Поиск подходящего офиса" : {
                setButtons(<SearchForm onSubmitForm={onSubmitForm}/>)
                setChatMessages(chatMessages => [...chatMessages, ...renderMessage([{role : "User", message : "Поиск подходящего офиса"}, {role : "Chat", message : "Заполните форму для поиска подходящего офиса:"}])]);
                break;
            }
            default : console.log("End")
        }

        if (Object.keys(FAQ).indexOf(text) !== -1) {
            clickedFAQ.current = [...clickedFAQ.current, text]
            setButtons(renderButtons([...Object.keys(FAQ).filter(text => clickedFAQ.current.indexOf(text) === -1), "Выйти"]));
            setChatMessages(chatMessages => [...chatMessages, ...renderMessage([{role : "User", message : text}, {role : "Chat", message : ""}])]);
            setCurrentMessage('');
            typingRef.current = true;
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const {minArea, maxArea, minPrice, maxPrice} = Object.fromEntries(new FormData(e.target).entries());

        setBaseButtons();
        setChatMessages(chatMessages => [...chatMessages, ...renderMessage([{role : "User", message : `Минимальная площадь: ${minArea} м²`}, {role : "User", message : `Максимальная площадь: ${maxArea} м²`}, {role : "User", message : `Минимальная цена: ${minPrice}`}, {role : "User", message : `Минимальная цена: ${minPrice}`}, {role : "Chat", message : "Результаты поиска:"}])]);


        console.log(minArea, maxArea, minPrice, maxPrice)
    }

    return (
        <>
            <div style={{height: `calc(100dvh - 72px)`, margin : "72px auto 0 auto"}} className="d-flex flex-column justify-content-center wrapper-chat col-11 position-relative">
              <div ref={chatWindowRef} style={{flex: "1 1 auto", overflow: "auto"}} className="d-flex flex-column justify-content-start align-items-center wrapper-chat-window pt-3 px-1">
                    {chatMessages}
                    {typingRef.current && <div className="alert alert-light col-12 text-start">{currentMessage}</div>}
                </div>
                <div style={{maxHeight : "160px", backgroundColor : "#fff", overflow: "auto", overflowX : "hidden"}} className="d-flex flex-wrap justify-content-center align-items-scretch wrapper-chat-buttons my-4 col-12">
                    {buttons}
                </div>
            </div>
        </>
    )
}

const SearchForm = (props) => {

    return (
        <form onSubmit={props.onSubmitForm} className="d-flex flex-wrap col-12 col-lg-6 m-auto py-1" id="search-office" action="" method="post">
            <div className="d-flex flex-wrap search-office-Area col-12">
                <div class="input-group mb-3">
                    <span class="input-group-text col-4">Площадь</span>
                    <input name="minArea" type="number" min="0" onKeyPress={(event) => {if (event.key === 'e' || event.key === '-') {event.preventDefault();}}} aria-label="minArea" placeholder="От" class="form-control" required/>
                    <input name="maxArea" type="number" min="0" onKeyPress={(event) => {if (event.key === 'e' || event.key === '-') {event.preventDefault();}}} aria-label="maxArea" placeholder="До" class="form-control" required/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text col-4">Цена</span>
                    <input name="minPrice" type="number" min="0" onKeyPress={(event) => {if (event.key === 'e' || event.key === '-') {event.preventDefault();}}} aria-label="minPrice" placeholder="От" class="form-control" required/>
                    <input name="maxPrice" type="number" min="0" onKeyPress={(event) => {if (event.key === 'e' || event.key === '-') {event.preventDefault();}}} aria-label="maxPrice" placeholder="До" class="form-control" required/>
                </div>
            </div>
            <div className="form-controls w-100 text-center mt-1">
                <button className="btn btn-submit btn-success col-12 col-lg-6 text-center" type="submit">Поиск</button>
            </div>
        </form>
    )    
}

export default AppChat