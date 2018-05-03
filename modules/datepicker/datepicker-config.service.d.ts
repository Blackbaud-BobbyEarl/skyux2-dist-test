import { SkyWindowRefService } from '../window';
import 'moment/min/locales.min';
export declare class SkyDatepickerConfigService {
    private windowRefService;
    startingDay: number;
    minDate: Date;
    maxDate: Date;
    dateFormat: string;
    constructor(windowRefService: SkyWindowRefService);
}
