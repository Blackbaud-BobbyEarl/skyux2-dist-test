import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var SkyPagingComponent = (function () {
    function SkyPagingComponent() {
        this.pageSize = 10;
        this.maxPages = 5;
        this.currentPage = 1;
        this.itemCount = 0;
        this.currentPageChange = new EventEmitter();
        this.displayedPages = [];
        this.pageCount = 0;
    }
    SkyPagingComponent.prototype.ngOnChanges = function (changes) {
        this.setPage(this.currentPage);
    };
    SkyPagingComponent.prototype.setPage = function (pageNumber) {
        var previousPage = this.currentPage;
        this.setPageCount();
        if (pageNumber < 1 || this.pageCount < 1) {
            this.currentPage = 1;
        }
        else if (pageNumber > this.pageCount) {
            this.currentPage = this.pageCount;
        }
        else {
            this.currentPage = pageNumber;
        }
        this.setDisplayedPages();
        if (previousPage !== this.currentPage) {
            this.currentPageChange.emit(this.currentPage);
        }
    };
    SkyPagingComponent.prototype.nextPage = function () {
        this.setPage(this.currentPage + 1);
    };
    SkyPagingComponent.prototype.previousPage = function () {
        this.setPage(this.currentPage - 1);
    };
    SkyPagingComponent.prototype.getDisplayedPageNumbers = function (pageCount, maxDisplayedPages, pageNumber) {
        var pageBounds = Math.floor((maxDisplayedPages - 1) / 2);
        var lowerBound = pageNumber - pageBounds - 1;
        var upperBound = pageNumber + pageBounds - 1;
        if (pageCount < maxDisplayedPages) {
            lowerBound = 0;
            upperBound = pageCount - 1;
        }
        else {
            if (upperBound > pageCount - 1) {
                upperBound = pageCount - 1;
                /* istanbul ignore else */
                /* sanity check */
                if (upperBound - lowerBound < maxDisplayedPages) {
                    lowerBound = upperBound - maxDisplayedPages + 1;
                }
            }
            else if (lowerBound < 0) {
                lowerBound = 0;
                upperBound = maxDisplayedPages - 1;
            }
        }
        var displayedPageNumbers = [];
        for (var i = lowerBound; i <= upperBound; i++) {
            displayedPageNumbers.push(i + 1);
        }
        return displayedPageNumbers;
    };
    SkyPagingComponent.prototype.setPageCount = function () {
        if (this.itemCount === 0 || this.pageSize === 0) {
            this.pageCount = 0;
            return;
        }
        this.pageCount = Math.ceil(this.itemCount / this.pageSize);
    };
    SkyPagingComponent.prototype.setDisplayedPages = function () {
        this.displayedPages =
            this.getDisplayedPageNumbers(this.pageCount, this.maxPages, this.currentPage);
    };
    return SkyPagingComponent;
}());
export { SkyPagingComponent };
SkyPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-paging',
                template: "<ul\n  role=\"navigation\"\n  *ngIf=\"pageCount > 1\"\n  [attr.aria-label]=\"pagingLabel || 'paging_label' | skyResources\"\n  >\n  <li>\n    <a\n      href\n      (click)=\"previousPage(); false\"\n      class=\"fa fa-caret-left sky-paging-caret\"\n      sky-cmp-id=\"previous\"\n      [ngClass]=\"{ 'sky-paging-disabled': currentPage === 1 }\"\n      [attr.aria-label]=\"'paging_previous' | skyResources\"></a>\n  </li>\n  <li\n    *ngFor=\"let pageNumber of displayedPages\"\n    class=\"sky-list-paging-link\">\n    <a\n      href\n      [attr.sky-cmp-id]=\"pageNumber\"\n      (click)=\"setPage(pageNumber); false\"\n      [ngClass]=\"{ 'sky-paging-current': currentPage === pageNumber }\"\n      >{{pageNumber}}\n    </a>\n  </li>\n  <li>\n    <a\n      href\n      (click)=\"nextPage(); false\"\n      class=\"fa fa-caret-right sky-paging-caret\"\n      sky-cmp-id=\"next\"\n      [ngClass]=\"{ 'sky-paging-disabled': pageCount === currentPage }\"\n      [attr.aria-label]=\"'paging_next' | skyResources\"\n      >\n    </a>\n  </li>\n</ul>\n",
                styles: [":host {\n  display: block;\n  margin-top: 15px;\n}\n\n:host ul {\n  margin: 0;\n  display: inline-block;\n  padding-left: 0;\n  border-radius: 4px;\n}\n\n:host li {\n  display: inline;\n}\n\n:host li a {\n  background-color: #ffffff;\n  color: inherit;\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  float: left;\n  margin-left: -1px;\n  padding: 4px 10px;\n  text-decoration: none;\n  line-height: 1.42857;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n:host li a.sky-paging-caret {\n  padding-left: 8.5px;\n  padding-right: 8.5px;\n  transform: none;\n}\n\n:host li a.sky-paging-current {\n  background-color: #eeeeef;\n}\n\n:host li a:hover {\n  background-color: #d4d4d6;\n}\n\n:host li a.sky-paging-disabled {\n  color: #686c73;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyPagingComponent.ctorParameters = function () { return []; };
SkyPagingComponent.propDecorators = {
    'pageSize': [{ type: Input },],
    'maxPages': [{ type: Input },],
    'currentPage': [{ type: Input },],
    'itemCount': [{ type: Input },],
    'pagingLabel': [{ type: Input },],
    'currentPageChange': [{ type: Output },],
};
//# sourceMappingURL=paging.component.js.map