import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this.users = [
            {
                name: 'Олександр',
                email: 'oleksandr@example.com',
                eventId: 1,
                date: '15-3-2022'
            },
            {
                name: 'Марія',
                email: 'maria@example.com',
                eventId: 1,
                date: '16-3-2022'
            },
            {
                name: 'Іван',
                email: 'ivan@example.com',
                eventId: 2,
                date: '17-3-2022'
            },
            {
                name: 'Софія',
                email: 'sofia@example.com',
                eventId: 3,
                date: '18-3-2022'
            },
            {
                name: 'Андрій',
                email: 'andriy@example.com',
                eventId: 3,
                date: '19-3-2022'
            }
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

