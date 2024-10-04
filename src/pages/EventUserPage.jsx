import React, {useContext, useEffect, useState} from 'react';
import eventPage from "./styles/eventPage.css"
import {useSearchEventAndSort, useSearchUserAndSort} from "../hooks/useSortEvent";
import UserFilter from "../component/UserFilter";
import UserList from "../component/UserList";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const EventUser = observer(() => {
    const {user} = useContext(Context);
    console.log(user.users);

    const {id} = useParams();

    const [filter, setFilter] = useState({sort:'', search:''});
    const sortAndFilter = useSearchUserAndSort(user.users, filter.sort, filter.search);

    return (
        <div className={"eventPage"}>
            <div>
                <div className={'eventFilter'}>
                    <p>Filter</p>
                    <UserFilter filter={filter} setFilter={setFilter}/>
                </div>
                <div className={"eventList"}>
                    <UserList users={sortAndFilter} id={id}/>
                </div>
            </div>
        </div>
    );
});

export default EventUser;