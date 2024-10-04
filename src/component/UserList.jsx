import React from 'react';
import UserItem from "./UserItem";


const UserList = ({users, id}) => {


    return (
        <div className={"eventList"}>
            {
                users.map((user) =>
                        Number(id) === user.eventId ? <UserItem user={user} key={user.email}/> :null
           ,     )
            }
        </div>
    );
};

export default UserList;