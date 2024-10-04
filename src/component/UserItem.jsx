import React from 'react';
import eventItem from './styles/eventItem.css';
import {getDate} from "../hooks/useDate";

const EventsItem = (props) => {
    return (
        <div className={"eventItem"}>
            <h3>{props.user.name}</h3>
            <p>email: {props.user.email}</p>
            <p>date: {getDate(props.user.date)}</p>
        </div>

    );
};

export default EventsItem;