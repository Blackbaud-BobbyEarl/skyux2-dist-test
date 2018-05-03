import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var SkyAutocompleteDemoComponent = (function () {
    function SkyAutocompleteDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.templateDrivenModel = {
            favoriteColor: { name: 'Red' }
        };
        this.colors = [
            { name: 'Red' },
            { name: 'Blue' },
            { name: 'Green' },
            { name: 'Orange' },
            { name: 'Pink' },
            { name: 'Purple' },
            { name: 'Yellow' },
            { name: 'Brown' },
            { name: 'Turquoise' },
            { name: 'White' },
            { name: 'Black' }
        ];
        this.oceans = [
            { title: 'Arctic', id: 1 },
            { title: 'Atlantic', id: 2 },
            { title: 'Indian', id: 3 },
            { title: 'Pacific', id: 4 }
        ];
        this.planets = [
            { name: 'Mercury', description: 'Mercury is a planet in our solar system.' },
            { name: 'Venus', description: 'Venus is a planet in our solar system.' },
            { name: 'Earth', description: 'Earth is a planet in our solar system.' },
            { name: 'Mars', description: 'Mars is a planet in our solar system.' },
            { name: 'Jupiter', description: 'Jupiter is a planet in our solar system.' },
            { name: 'Saturn', description: 'Saturn is a planet in our solar system.' },
            { name: 'Uranus', description: 'Uranus is a planet in our solar system.' },
            { name: 'Neptune', description: 'Neptune is a planet in our solar system.' }
        ];
        this.searchFilters = [
            function (searchText, item) {
                return (item.name !== 'Red');
            }
        ];
    }
    SkyAutocompleteDemoComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SkyAutocompleteDemoComponent.prototype.submitTemplateForm = function (formData) {
        alert('Form submitted with: \n' + JSON.stringify(formData));
    };
    SkyAutocompleteDemoComponent.prototype.submitReactiveForm = function () {
        alert('Form submitted with: \n' + JSON.stringify(this.reactiveForm.value));
    };
    SkyAutocompleteDemoComponent.prototype.onPlanetSelection = function (args) {
        alert("You selected " + args.selectedItem.name);
    };
    SkyAutocompleteDemoComponent.prototype.getOceanSearchFunction = function () {
        var searchFunction = function (searchText, oceans) {
            return new Promise(function (resolve) {
                var searchTextLower = searchText.toLowerCase();
                var results = oceans.filter(function (ocean) {
                    var val = ocean.title;
                    var isMatch = (val && val.toString().toLowerCase().indexOf(searchTextLower) > -1);
                    return isMatch;
                });
                // Simulate an async request.
                setTimeout(function () {
                    resolve(results);
                }, 500);
            });
        };
        return searchFunction;
    };
    SkyAutocompleteDemoComponent.prototype.createForm = function () {
        this.reactiveForm = this.formBuilder.group({
            favoriteColor: undefined,
            farthestPlanet: {},
            largestOcean: { title: 'Arctic', id: 1 }
        });
    };
    return SkyAutocompleteDemoComponent;
}());
export { SkyAutocompleteDemoComponent };
SkyAutocompleteDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-autocomplete-demo',
                template: "<h2 class=\"sky-section-heading\">\n  Reactive form setup\n</h2>\n\n<form\n  class=\"autocomplete-demo-form\"\n  [formGroup]=\"reactiveForm\"\n  (ngSubmit)=\"submitReactiveForm()\"\n  novalidate>\n\n  <h3 class=\"sky-subsection-heading\">\n    Basic\n  </h3>\n\n  <p>\n    The following field uses the default settings.\n  </p>\n\n  <div class=\"sky-form-group\">\n    <label\n      for=\"my-autocomplete-reactive-basic\"\n      class=\"sky-control-label\">\n      What is your favorite color?\n    </label>\n\n    <sky-autocomplete\n      [data]=\"colors\">\n      <input\n        skyAutocomplete\n        id=\"my-autocomplete-reactive-basic\"\n        type=\"text\"\n        formControlName=\"favoriteColor\">\n    </sky-autocomplete>\n  </div>\n\n  <h3 class=\"sky-subsection-heading\">\n    Advanced\n  </h3>\n\n  <div style=\"margin-bottom:10px;\">\n    The following field:<br>\n    <ul>\n      <li>utilizes a custom search result template,</li>\n      <li>searches against the name and description properties,</li>\n      <li>limits the search results to two (2),</li>\n      <li>runs the search if the query is at least three (3) characters long,</li>\n      <li>and fires an event when a selection is made.</li>\n    </ul>\n  </div>\n\n  <div class=\"sky-form-group\">\n    <label\n      for=\"my-autocomplete-reactive-advanced\"\n      class=\"sky-control-label\">\n      Which planet is farthest from the sun?\n    </label>\n\n    <sky-autocomplete\n      [data]=\"planets\"\n      [propertiesToSearch]=\"['name', 'description']\"\n      [searchResultsLimit]=\"2\"\n      [searchResultTemplate]=\"planetSearchResultTemplate\"\n      [searchTextMinimumCharacters]=\"3\"\n      (selectionChange)=\"onPlanetSelection($event)\">\n      <input\n        skyAutocomplete\n        id=\"my-autocomplete-reactive-advanced\"\n        type=\"text\"\n        formControlName=\"farthestPlanet\">\n    </sky-autocomplete>\n  </div>\n\n  <h3 class=\"sky-subsection-heading\">\n    Search filters\n  </h3>\n\n  <p>\n    The following field provides a custom function that filters the data before every search attempt.\n  </p>\n\n  <div class=\"sky-form-group\">\n    <label\n      for=\"my-autocomplete-reactive-filters\"\n      class=\"sky-control-label\">\n      Pick a color (\"Red\" is not available).\n    </label>\n\n    <sky-autocomplete\n      [data]=\"colors\"\n      [searchFilters]=\"searchFilters\">\n      <input\n        skyAutocomplete\n        id=\"my-autocomplete-reactive-filters\"\n        type=\"text\"\n        formControlName=\"favoriteColor\">\n    </sky-autocomplete>\n  </div>\n\n  <h3 class=\"sky-subsection-heading\">\n    Custom search function\n  </h3>\n\n  <p>\n    The following field has a preselected value and utilizes a custom search function, as well as a custom template for the search results.\n  </p>\n\n  <div class=\"sky-form-group\">\n    <label\n      for=\"my-autocomplete-reactive-custom\"\n      class=\"sky-control-label\">\n      Which ocean is the largest?\n    </label>\n\n    <sky-autocomplete\n      [data]=\"oceans\"\n      [search]=\"getOceanSearchFunction()\"\n      [searchResultTemplate]=\"oceanSearchResultTemplate\"\n      [descriptorProperty]=\"'title'\">\n      <input\n        skyAutocomplete\n        id=\"my-autocomplete-reactive-custom\"\n        type=\"text\"\n        formControlName=\"largestOcean\">\n    </sky-autocomplete>\n  </div>\n\n  <div class=\"autocomplete-demo-alert\">\n    <strong>Form model:</strong>\n    <pre>{{ reactiveForm.value | json }}</pre>\n  </div>\n\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"submit\">\n    Submit\n  </button>\n</form>\n\n<h2 class=\"sky-section-heading\">\n  Template-driven form setup\n</h2>\n\n<form\n  class=\"autocomplete-demo-form\"\n  #myForm=\"ngForm\"\n  (ngSubmit)=\"submitTemplateForm(myForm.value)\"\n  novalidate>\n\n  <p>\n    This field uses the default settings and has a preselected value.\n  </p>\n\n  <div class=\"sky-form-group\">\n    <label\n      for=\"my-autocomplete-template-driven\"\n      class=\"sky-control-label\">\n      What is your favorite color?\n    </label>\n\n    <sky-autocomplete\n      [data]=\"colors\">\n      <input\n        skyAutocomplete\n        id=\"my-autocomplete-template-driven\"\n        type=\"text\"\n        name=\"favoriteColor\"\n        [(ngModel)]=\"templateDrivenModel.favoriteColor\">\n    </sky-autocomplete>\n  </div>\n\n  <div class=\"autocomplete-demo-alert\">\n    <strong>Form model:</strong>\n    <pre>{{ myForm.value | json }}</pre>\n  </div>\n\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"submit\">\n    Submit\n  </button>\n</form>\n\n<!-- Custom search result templates -->\n\n<ng-template\n  let-item=\"item\"\n  #planetSearchResultTemplate>\n  <strong>{{ item.name }}</strong><br>\n  {{ item.description }}\n</ng-template>\n\n<ng-template\n  let-item=\"item\"\n  #oceanSearchResultTemplate>\n  <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\n  {{ item.title }} &bull; ID {{ item.id }}\n</ng-template>\n",
                styles: [".autocomplete-demo-form ::ng-deep .sky-form-group {\n  background-color: #eeeeef;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  margin: 10px 0;\n  padding: 10px;\n}\n\n.autocomplete-demo-form ::ng-deep h3 {\n  margin-top: 30px;\n}\n\n.autocomplete-demo-alert {\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #cdcfd2;\n  border-radius: 3px;\n}\n\n.autocomplete-demo-alert pre {\n  margin: 0;\n}\n"]
            },] },
];
/** @nocollapse */
SkyAutocompleteDemoComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
]; };
//# sourceMappingURL=autocomplete-demo.component.js.map