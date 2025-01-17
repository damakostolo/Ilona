import React, {useContext, useEffect, useState} from 'react';
import EventsList from "../component/EventsList";
import eventPage from "./styles/eventPage.css"
import {observer} from "mobx-react-lite";
import EventsFilter from "../component/EventsFilter";
import {useSearchEventAndSort} from "../hooks/useSortEvent";
import {Context} from "../index";
import MyButton from "../component/UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import {eventGet} from "../http/event";


const EventsPage = observer(() => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        eventGet().then(data => {
            if (Array.isArray(data)) {
                setEvents(data);
            } else {
                console.error("Unexpected data format:", data);
            }
        }).catch(error => {
            console.error("Failed to fetch events:", error);
        });
    }, []);



    let navigate = useNavigate();

    const [filter, setFilter] = useState({sort:'', search:''});
    const sortAndFilter = useSearchEventAndSort(events, filter.sort, filter.search);

    return (
        <div className={"eventPage"}>
            <div>
              <div className={'eventFilter'}>
                    <p>Filter</p>
                    <EventsFilter filter={filter} setFilter={setFilter}/>
                    <MyButton onClick={() => navigate(`/add`)}>Add Event</MyButton>
                </div>
                <div className={"eventList"}>
                    <EventsList events={sortAndFilter}/>
                </div>
            </div>
        </div>
    );
});

export default EventsPage;