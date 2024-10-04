import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this.users = [
            {name: 'Dana',
            email: 'dana@example.com',
                eventId:1,
            date:'26-6-2007'},
            {name: 'Dana',
                eventId:1,
                email: 'dana@example.com',
                date:'26-6-2007'},
            {name: 'Dana',
                eventId:1,
                email: 'dana@example.com',
                date:'26-6-2007'},
            {name: 'Dana',
                eventId:2,
                email: 'dana@example.com',
                date:'26-6-2007'},
            {name: 'Dana',
                eventId:3,
                email: 'dana@example.com',
                date:'26-6-2007'}
        ]
        makeAutoObservable(this)

    }


    setUser(user) {
        this.users.push(user)

    }

    get user(){
        return this.users
    }

}

