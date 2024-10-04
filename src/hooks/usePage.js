import {useMemo} from "react";

export const usePage = (totalPage) =>{
    return useMemo(() => {
        return  [...Array(totalPage).keys()].map(i => i + 1)
    }, [totalPage])

}