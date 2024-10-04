import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {

        this.events = [
            {
                id: 1,
                title: "admin",
                description: "pending",
                name: "ivan",
                email: "user1@example.com",
                date: "26-6-2007"
            },
            {
                id: 2,
                title: "guest",
                description: "active",
                name: "mike",
                email: "user2@example.com",
                date: "2-11-2022"
            },
            {
                id: 3,
                title: "admin",
                description: "pending",
                name: "anna",
                email: "user3@example.com",
                date: "11-1-2012"
            },
            {
                id: 4,
                title: "user",
                description: "inactive",
                name: "olga",
                email: "user4@example.com",
                date: "1-12-2004"
            },
            {
                id: 5,
                title: "guest",
                description: "active",
                name: "roma",
                email: "user5@example.com",
                date: "3-4-2005"
            },
            {
                id: 6,
                title: "admin",
                description: "inactive",
                name: "mike",
                email: "user6@example.com",
                date: "15-7-2024"
            },
            {
                id: 7,
                title: "user",
                description: "pending",
                name: "olga",
                email: "user7@example.com",
                date: "9-6-2008"
            },
            {
                id: 8,
                title: "admin",
                description: "active",
                name: "ivan",
                email: "user8@example.com",
                date: "20-9-2015"
            },
            {
                id: 9,
                title: "guest",
                description: "inactive",
                name: "anna",
                email: "user9@example.com",
                date: "12-10-2017"
            },
            {
                id: 10,
                title: "user",
                description: "pending",
                name: "roma",
                email: "user10@example.com",
                date: "4-8-2020"
            }
        ]
        makeAutoObservable(this)
    }


    setEvent(event) {
        this.events.push(event)
    }

    get event(){
        return this.events
    }

}

