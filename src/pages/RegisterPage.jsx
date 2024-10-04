import React, {useContext} from 'react';
import MyInput from "../component/UI/MyInput/MyInput";
import registerPage from "./styles/registerPage.css";
import MyButton from "../component/UI/MyButton/MyButton";
import {Context} from "../index";
import {useParams, redirect, useNavigate} from "react-router-dom";

const RegisterPage = () => {

    let navigate = useNavigate();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [date, setDate] = React.useState("01-01-01");

    const {user} = useContext(Context);

    const {id} = useParams();

    const saveUser = (e, name, email, date,  id) => {
        e.preventDefault();
        console.log(user.users);
        user.setUser(
            {name: name,
            email: email,
            date: date,
            eventId: Number(id)}
        );
        console.log(name, email, date,  id);
        return navigate(`/view/${id}`);
    }
    return (
        <div className={"registerPage"}>
            <div className={'eventForm'}>
                <h2>Registration event</h2>
                <form>
                    <p>Full name</p>
                    <MyInput type="text" placeholder="Daniil..."
                             onChange={(e) => setName(e.target.value)}/>

                    <p>Email</p>
                    <MyInput type="email" placeholder="teodaniil2@gmail.com..."
                        onChange={(e) => setEmail(e.target.value)}/>

                    <p>Date of birth</p>
                    <MyInput type="date"
                        onChange={(e) => setDate(e.target.value)}/>

                    <MyButton  onClick={(e) => saveUser(e, name, email, date , id)}>Send</MyButton>
                </form>
            </div>
</div>
)
    ;
};

export default RegisterPage;