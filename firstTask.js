function updateDateTime() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    month = (month < 10) ? '0' + month : month;
    date = (date < 10) ? '0' + date : date;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    let dateTimeString = date + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    document.getElementById('datetime').innerText = dateTimeString;
}
setInterval(updateDateTime, 1000);