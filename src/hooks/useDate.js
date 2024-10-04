const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}

export const getDate = (str) => {
    let date = new Date(str);
    return date.toLocaleString('ua', options)
}