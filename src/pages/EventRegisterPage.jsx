import React, {useContext} from 'react';
import MyInput from "../component/UI/MyInput/MyInput";
import registerPage from "./styles/registerPage.css";
import MyButton from "../component/UI/MyButton/MyButton";
import {Context} from "../index";
import {useParams, redirect, useNavigate} from "react-router-dom";

const RegisterPage = () => {

    let navigate = useNavigate();

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [date, setDate] = React.useState("01-01-01");

    const {event} = useContext(Context);


    const saveUser = (e, title,description ,name, email, date) => {
        e.preventDefault();

        event.setEvent(
            {id: 11, // тут просто для прикладу , сама бд буде генерувати id користувача
                title: title,
                description: description,
                name: name,
                email: email,
                date: date}
        );
        console.log(name, email, date);
        return navigate(`/`);
    }
    return (
        <div className={"registerPage"}>
            <div className={'eventForm'}>
                <h2>Registration event</h2>
                <form>
                    <p>title</p>
                    <MyInput type="text" placeholder="mushroom picking..."
                             onChange={(e) => setTitle(e.target.value)}/>

                    <p>description</p>
                    <MyInput type="text" placeholder="Picking mushrooms at 10 o'clock...."
                             onChange={(e) => setDescription(e.target.value)}/>

                    <p>Full name</p>
                    <MyInput type="text" placeholder="Daniil.."
                             onChange={(e) => setName(e.target.value)}/>

                    <p>Email</p>
                    <MyInput type="email" placeholder="teodaniil2@gmail.com..."
                             onChange={(e) => setEmail(e.target.value)}/>

                    <p>Date of event</p>
                    <MyInput type="date"
                             onChange={(e) => setDate(e.target.value)}/>

                    <MyButton onClick={(e) => saveUser(e,title, description, name, email, date)}>Send</MyButton>
                </form>
            </div>
        </div>
    )
        ;
};

export default RegisterPage;