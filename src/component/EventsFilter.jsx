import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/mySelect/MySelect";

const EventsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
            placeholder={'search title...'}
            value={filter.search}
            onChange={e => setFilter({...filter, search: e.target.value})}/>
            <MySelect
            options={[
                {name:'title', value:'title'},
                {name:'description', value:'description'},
                {name:'organization', value:'name'},
                {name:'email', value:'email'},
                {name:'date', value:'date'}
            ]}
            value={filter.sort}
            defaultOption={'filter'}
            onChange={sort => setFilter({...filter, sort: sort})}/>
        </div>
    );
};

export default EventsFilter;