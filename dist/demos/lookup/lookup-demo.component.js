import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
var SkyLookupDemoComponent = (function () {
    function SkyLookupDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.people = [
            { name: 'Andy' },
            { name: 'Beth' },
            { name: 'David' },
            { name: 'Frank' },
            { name: 'Grace' },
            { name: 'Isaac' },
            { name: 'John' },
            { name: 'Joyce' },
            { name: 'Lindsey' },
            { name: 'Mitch' },
            { name: 'Patty' },
            { name: 'Paul' },
            { name: 'Quincy' },
            { name: 'Sally' },
            { name: 'Susan' },
            { name: 'Vanessa' },
            { name: 'Winston' },
            { name: 'Xavier' },
            { name: 'Yolanda' },
            { name: 'Zack' }
        ];
        this.friends = [
            { name: 'Susan' }
        ];
    }
    SkyLookupDemoComponent.prototype.ngOnInit = function () {
        this.createForm();
        // If you need to execute some logic after the lookup values change,
        // subscribe to Angular's built-in value changes observable.
        this.reactiveForm.valueChanges.subscribe(function (changes) {
            console.log('Lookup value changes:', changes);
        });
    };
    // Only show people in the search results that have not been chosen already.
    SkyLookupDemoComponent.prototype.getSearchFilters = function () {
        var friends = this.reactiveForm.controls.friends.value;
        return [
            function (searchText, item) {
                var found = friends.find(function (friend) { return friend.name === item.name; });
                return !found;
            }
        ];
    };
    SkyLookupDemoComponent.prototype.enableLookup = function () {
        this.reactiveForm.controls.friends.enable();
    };
    SkyLookupDemoComponent.prototype.disableLookup = function () {
        this.reactiveForm.controls.friends.disable();
    };
    SkyLookupDemoComponent.prototype.submitReactiveForm = function () {
        alert('Form submitted with: ' + JSON.stringify(this.reactiveForm.value));
    };
    SkyLookupDemoComponent.prototype.createForm = function () {
        this.reactiveForm = this.formBuilder.group({
            friends: new FormControl(this.friends)
        });
    };
    return SkyLookupDemoComponent;
}());
export { SkyLookupDemoComponent };
SkyLookupDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-lookup-demo',
                template: "<form\n  class=\"lookup-demo-form\"\n  [formGroup]=\"reactiveForm\"\n  (ngSubmit)=\"submitReactiveForm()\"\n  novalidate>\n\n  <div class=\"sky-form-group\">\n    <label\n      id=\"my-friends-label\"\n      class=\"sky-control-label\">\n      Who are your friends?\n    </label>\n    <sky-lookup\n      ariaLabelledBy=\"my-friends-label\"\n      formControlName=\"friends\"\n      placeholderText=\"Type a person's name...\"\n      [data]=\"people\"\n      [searchFilters]=\"getSearchFilters()\">\n    </sky-lookup>\n  </div>\n\n  <p>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-default\"\n      (click)=\"disableLookup()\">\n      Disable lookup field\n    </button>\n\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-default\"\n      (click)=\"enableLookup()\">\n      Enable lookup field\n    </button>\n  </p>\n\n  <div class=\"lookup-demo-alert\">\n    <strong>Form model:</strong>\n    <pre>{{ reactiveForm.value | json }}</pre>\n  </div>\n\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"submit\">\n    Submit\n  </button>\n\n</form>\n",
                styles: [".lookup-demo-form ::ng-deep .sky-form-group {\n  background-color: #eeeeef;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  margin: 10px 0;\n  padding: 10px;\n}\n\n.lookup-demo-form ::ng-deep h3 {\n  margin-top: 30px;\n}\n\n.lookup-demo-alert {\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #cdcfd2;\n  border-radius: 3px;\n}\n\n.lookup-demo-alert pre {\n  margin: 0;\n}\n"]
            },] },
];
/** @nocollapse */
SkyLookupDemoComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
]; };
//# sourceMappingURL=lookup-demo.component.js.map