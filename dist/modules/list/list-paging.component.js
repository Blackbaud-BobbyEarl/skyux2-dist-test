import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var ListPagingComponent = (function () {
    function ListPagingComponent(state, dispatcher) {
        this.initialized = new BehaviorSubject(false);
        this.state = state;
        this.dispatcher = dispatcher;
    }
    return ListPagingComponent;
}());
export { ListPagingComponent };
//# sourceMappingURL=list-paging.component.js.map