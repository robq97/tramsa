
let today = new Date();

const date = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return today;
}

const time = () => {

    let seconds = today.getSeconds();
    let minutes = today.getMinutes();
    let hour = String(today.getHours()).padStart(2, '0');
    let time = hour + ':' + minutes + ':' + seconds;

    return time;
}

export default { date, time };
