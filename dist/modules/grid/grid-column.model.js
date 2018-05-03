var SkyGridColumnModel = (function () {
    function SkyGridColumnModel(template, data) {
        this.isSortable = true;
        this.template = template;
        if (data) {
            this.id = data.id || data.field;
            this.type = data.type;
            this.field = data.field;
            this.heading = data.heading;
            this.width = data.width ? Number(data.width) : undefined;
            this.hidden = data.hidden;
            this.locked = data.locked;
            this.description = data.description;
            this.searchFunction = data.searchFunction;
            this.isSortable = data.isSortable;
        }
    }
    return SkyGridColumnModel;
}());
export { SkyGridColumnModel };
//# sourceMappingURL=grid-column.model.js.map