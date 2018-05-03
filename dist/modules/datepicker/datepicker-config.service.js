import { Injectable } from '@angular/core';
import { SkyWindowRefService } from '../window';
var moment = require('moment');
import 'moment/min/locales.min';
var SkyDatepickerConfigService = (function () {
    function SkyDatepickerConfigService(windowRefService) {
        this.windowRefService = windowRefService;
        this.startingDay = 0;
        var safeNavigator = this.windowRefService.getWindow().navigator;
        /*istanbul ignore next */
        var userLang = safeNavigator.languages && safeNavigator.languages[0] ||
            safeNavigator.language || safeNavigator.userLanguage || 'en';
        moment.locale(userLang);
        this.dateFormat = moment.localeData().longDateFormat('L');
    }
    return SkyDatepickerConfigService;
}());
export { SkyDatepickerConfigService };
SkyDatepickerConfigService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyDatepickerConfigService.ctorParameters = function () { return [
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=datepicker-config.service.js.map