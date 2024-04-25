function daysBetweenTwoDates(date1, date2) {
    let parts1 = date1.split('.');
    let parts2 = date2.split('.');
    let dateObject1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
    let dateObject2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
    let difference = dateObject2 - dateObject1;
    let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
function calculateDays() {
    let date1 = document.getElementById('date1').value;
    let date2 = document.getElementById('date2').value;
    let days = daysBetweenTwoDates(date1, date2);
    let resultElement = document.getElementById('result');
    resultElement.innerText = "Days between the two dates: " + days;
}