const formatJsonDate = function (jsonStr) {
    var tmp = "";
    if (jsonStr == null || jsonStr == '')
        return '';
    if (jsonStr != null || jsonStr != undefined)
        tmp = jsonStr.toString();
    var seconds = tmp.replace(/\/Date\(/, "").replace(/\)\//, "");

    var now = new Date(parseInt(seconds));
    return now.toLocaleString();
};
const fromatYMDHI = function (jsonStr) {
    var tmp = this.FormatJsonDate(jsonStr);
    tmp = tmp.substr(0, 19);

    return tmp;
};
export {
    formatJsonDate,
    fromatYMDHI
}