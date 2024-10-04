import React, {useContext} from 'react';
import EventsItem from "./EventsItem";
import eventList from "./styles/eventList.css";



const EventsList = ({events} ) => {

    return (
        <div className={"eventList"}>
            {
                events.map(event => (
                    <EventsItem event={event} key={event.id}/>
                ))
            }
        </div>
    );
};

export default EventsList;