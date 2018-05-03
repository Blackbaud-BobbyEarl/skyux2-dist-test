var moment = require('moment');
var SkyDateFormatter = (function () {
    function SkyDateFormatter() {
    }
    SkyDateFormatter.prototype.format = function (date, format) {
        return moment(date.getTime()).format(format);
    };
    SkyDateFormatter.prototype.getDateFromString = function (dateString, format) {
        var momentValue = moment(dateString, format);
        if (!momentValue.isValid()) {
            momentValue = moment(dateString, 'YYYY-MM-DDThh:mm:ss.sssZ');
        }
        return momentValue.toDate();
    };
    SkyDateFormatter.prototype.dateIsValid = function (date) {
        return date && !isNaN(date.valueOf());
    };
    return SkyDateFormatter;
}());
export { SkyDateFormatter };
//# sourceMappingURL=date-formatter.js.map