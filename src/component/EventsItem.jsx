import React from 'react';
import eventItem from './styles/eventItem.css';
import {Link} from "react-router-dom";
import {getDate} from "../hooks/useDate";

const EventsItem = (props) => {


    return (
        <div className={"eventItem"}>
            <h3>{props.event.title}</h3>
            <p>{props.event.description}</p>
            <p>organizer: {props.event.name}</p>
            <p>email:{props.event.email}</p>
            <p>date: {getDate(props.event.date)}</p>

            <div className={"link"}>
                <Link to={`/register/${props.event.id}`}>Register</Link>
                <Link to={`/view/${props.event.id}`}>View</Link>
            </div>


        </div>

    );
};

export default EventsItem;