import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
var SkySelectFieldDemoComponent = (function () {
    function SkySelectFieldDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.colors = [
            { id: '1', label: 'Red' },
            { id: '2', label: 'Green' },
            { id: '3', label: 'Violet' }
        ];
        this.fruits = [
            { id: '1', category: 'Pome', label: 'Apple', description: 'Anne eats apples' },
            { id: '2', category: 'Berry', label: 'Banana', description: 'Ben eats bananas' },
            { id: '3', category: 'Pome', label: 'Pear', description: 'Patty eats pears' },
            { id: '4', category: 'Berry', label: 'Grape', description: 'George eats grapes' },
            { id: '5', category: 'Berry', label: 'Banana', description: 'Becky eats bananas' },
            { id: '6', category: 'Citrus', label: 'Lemon', description: 'Larry eats lemons' },
            { id: '7', category: 'Aggregate fruit', label: 'Strawberry', description: 'Sally eats strawberries' }
        ];
        this.fruitStream = new BehaviorSubject([]);
        this.colorStream = new BehaviorSubject([]);
        this.templateDrivenModel = {
            favoriteColor: this.colors[0],
            favoriteFruits: [this.fruits[0]]
        };
    }
    SkySelectFieldDemoComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.populateData();
    };
    SkySelectFieldDemoComponent.prototype.submitReactiveForm = function () {
        alert('Form submitted with: \n' + JSON.stringify(this.reactiveForm.value));
    };
    SkySelectFieldDemoComponent.prototype.submitTemplateForm = function (formData) {
        alert('Form submitted with: \n' + JSON.stringify(formData));
    };
    SkySelectFieldDemoComponent.prototype.createForm = function () {
        this.reactiveForm = this.formBuilder.group({
            favoriteColor: new FormControl(this.colors[0]),
            favoriteFruits: new FormControl([this.fruits[0]])
        });
    };
    SkySelectFieldDemoComponent.prototype.populateData = function () {
        this.fruitStream.next(this.fruits);
        this.colorStream.next(this.colors);
    };
    return SkySelectFieldDemoComponent;
}());
export { SkySelectFieldDemoComponent };
SkySelectFieldDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-select-field-demo',
                template: "<sky-row>\n  <sky-column screenSmall=\"6\">\n    <h2 class=\"sky-section-heading\">\n      Reactive form setup\n    </h2>\n\n    <form\n      [formGroup]=\"reactiveForm\"\n      (ngSubmit)=\"submitReactiveForm()\"\n      novalidate>\n\n      <div class=\"sky-form-group\">\n        <label\n          class=\"sky-control-label\"\n          id=\"my-select-field-1\">\n          What is your favorite color?\n        </label>\n        <sky-select-field\n          [data]=\"colorStream\"\n          ariaLabelledBy=\"my-select-field-1\"\n          formControlName=\"favoriteColor\"\n          pickerHeading=\"Colors\"\n          selectMode=\"single\"\n          singleSelectClearButtonTitle=\"Clear selected color\"\n          singleSelectOpenButtonTitle=\"Select a color\"\n          singleSelectPlaceholderText=\"Select a color...\">\n        </sky-select-field>\n      </div>\n\n      <div class=\"sky-form-group\">\n        <label\n          class=\"sky-control-label\"\n          id=\"my-select-field-2\">\n          What are your favorite fruits?\n        </label>\n        <sky-select-field\n          [data]=\"fruitStream\"\n          ariaLabelledBy=\"my-select-field-2\"\n          formControlName=\"favoriteFruits\"\n          multipleSelectOpenButtonText=\"Select some fruits\"\n          pickerHeading=\"Fruits\">\n        </sky-select-field>\n      </div>\n\n      <div class=\"select-field-demo-alert\">\n        <strong>Form model:</strong>\n        <pre>{{ reactiveForm.value | json }}</pre>\n      </div>\n\n      <button\n        class=\"sky-btn sky-btn-primary\"\n        type=\"submit\">\n        Submit\n      </button>\n    </form>\n  </sky-column>\n  <sky-column screenSmall=\"6\">\n    <h2 class=\"sky-section-heading\">\n      Template-driven form setup\n    </h2>\n\n    <form\n      #myForm=\"ngForm\"\n      (ngSubmit)=\"submitTemplateForm(myForm.value)\"\n      novalidate>\n\n      <div class=\"sky-form-group\">\n        <label\n          class=\"sky-control-label\"\n          id=\"my-select-field-template-driven-1\">\n          What is your favorite color?\n        </label>\n        <sky-select-field\n          [data]=\"colorStream\"\n          ariaLabelledBy=\"my-select-field-template-driven-1\"\n          pickerHeading=\"Colors\"\n          selectMode=\"single\"\n          singleSelectClearButtonTitle=\"Clear selected color\"\n          singleSelectOpenButtonTitle=\"Select a color\"\n          singleSelectPlaceholderText=\"Select a color...\"\n          name=\"favoriteColor\"\n          [(ngModel)]=\"templateDrivenModel.favoriteColor\">\n        </sky-select-field>\n      </div>\n\n      <div class=\"sky-form-group\">\n        <label\n          class=\"sky-control-label\"\n          id=\"my-select-field-template-driven-2\">\n          What are your favorite fruits?\n        </label>\n        <sky-select-field\n          [data]=\"fruitStream\"\n          ariaLabelledBy=\"my-select-field-template-driven-2\"\n          multipleSelectOpenButtonText=\"Select some fruits\"\n          pickerHeading=\"Fruits\"\n          name=\"favoriteFruits\"\n          [(ngModel)]=\"templateDrivenModel.favoriteFruits\">\n        </sky-select-field>\n      </div>\n\n      <div class=\"select-field-demo-alert\">\n        <strong>Form model:</strong>\n        <pre>{{ myForm.value | json }}</pre>\n      </div>\n\n      <button\n        class=\"sky-btn sky-btn-primary\"\n        type=\"submit\">\n        Submit\n      </button>\n    </form>\n  </sky-column>\n</sky-row>\n<sky-row>\n  <sky-column screenSmall=\"12\">\n    <h2 class=\"sky-section-heading\">\n      Disabled select fields\n    </h2>\n\n    <div class=\"sky-form-group\">\n      <label\n        class=\"sky-control-label\">\n        Make a single selection (disabled)\n      </label>\n      <sky-select-field\n        [data]=\"colorStream\"\n        [disabled]=\"true\"\n        selectMode=\"single\">\n      </sky-select-field>\n    </div>\n\n    <div class=\"sky-form-group\">\n      <label\n        class=\"sky-control-label\">\n        Make multiple selections (disabled)\n      </label>\n      <sky-select-field\n        [data]=\"fruitStream\"\n        [disabled]=\"true\">\n      </sky-select-field>\n    </div>\n  </sky-column>\n</sky-row>\n",
                styles: [".select-field-demo-alert {\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #cdcfd2;\n  border-radius: 3px;\n}\n\n.select-field-demo-alert pre {\n  margin: 0;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySelectFieldDemoComponent.ctorParameters = function () { return [
    { type: FormBuilder, },
]; };
//# sourceMappingURL=select-field-demo.component.js.map