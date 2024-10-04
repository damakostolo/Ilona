import {useMemo} from "react";

export const useSort = (events, sort ) => {
    return useMemo(() => {
            if (sort) {
                return [...events].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return events
        },
        [sort, events]);
}



export const useSearchEventAndSort = (events, sort, search) => {
    const useSortEvent = useSort(events, sort);

    return useMemo(() => {
        return useSortEvent.filter(event => event.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, useSortEvent]);

}

export const useSearchUserAndSort = (user, sort, search) => {
    const sortUser = useSort(user, sort);

    return useMemo(() => {
        return sortUser.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortUser]);

}