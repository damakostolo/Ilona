import React, { useContext } from 'react';
import MyInput from "../component/UI/MyInput/MyInput";
import MyButton from "../component/UI/MyButton/MyButton";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { saveUserToServer } from "../http/addEvents"; // Импорт функции отправки

const RegisterPage = () => {
    const navigate = useNavigate();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');

    const { event } = useContext(Context);

    const saveEvent = async (e) => {
        e.preventDefault();

        // Создаем объект нового события
        const newEvent = {
            title,
            description,
            name,
            email,
            date,
        };

        try {
            // Отправка данных на сервер
            const serverResponse = await saveUserToServer(newEvent);

            console.log("Server response:", serverResponse);

            // Сохраняем в локальный контекст
            event.setEvent(newEvent);

            // Переходим на главную страницу
            navigate(`/`);
        } catch (error) {
            console.error("Failed to save event:", error);
        }
    };

    return (
        <div className={"registerPage"}>
            <div className={'eventForm'}>
                <h2>Register a New Event</h2>
                <form>
                    <p>Title</p>
                    <MyInput
                        type="text"
                        placeholder="e.g., Mushroom picking"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <p>Description</p>
                    <MyInput
                        type="text"
                        placeholder="e.g., Picking mushrooms at 10 o'clock"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <p>Full Name</p>
                    <MyInput
                        type="text"
                        placeholder="e.g., Daniil"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />


                    <p>Email</p>
                    <MyInput
                        type="email"
                        placeholder="e.g., daniil@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <p>Date of Event</p>
                    <MyInput
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <MyButton onClick={saveEvent}>Submit</MyButton>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
