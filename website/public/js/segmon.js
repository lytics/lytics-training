function padValue(value, width) {
    return (value + "").padStart(width, "0");
}
function formatDate(date) {
    if (!date) {
        return '';
    }
    if (!(date instanceof Date)) {
        var d = Date.parse(date);
        if (isNaN(d)) {
            return '';
        }
        date = new Date(d);
    }
    var day = padValue(date.getDate(), 2);
    var hr = padValue(date.getHours(), 2);
    var min = padValue(date.getMinutes(), 2);
    var sec = padValue(date.getSeconds(), 2);
    var ms = padValue(date.getMilliseconds(), 3);
    var month = padValue(date.getMonth()+1);
    var year = date.getFullYear();
    return `${year}-${month}-${day} ${hr}:${min}:${sec}.${ms}`;
}
