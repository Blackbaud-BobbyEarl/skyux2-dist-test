import { AsyncList, AsyncItem } from 'microedge-rxstate/dist';
import { ListPagingModel } from './paging/paging.model';
import { ListSearchModel } from './search/search.model';
import { ListSelectedModel } from './selected/selected.model';
import { ListSortModel } from './sort/sort.model';
import { ListToolbarModel } from './toolbar/toolbar.model';
import { ListViewsModel } from './views/views.model';
var ListStateModel = (function () {
    function ListStateModel() {
        this.filters = [];
        this.items = new AsyncList();
        this.paging = new ListPagingModel();
        this.search = new ListSearchModel();
        this.selected = new AsyncItem();
        this.sort = new ListSortModel();
        this.toolbar = new ListToolbarModel();
        this.views = new ListViewsModel();
        this.selected.item = new ListSelectedModel();
    }
    return ListStateModel;
}());
export { ListStateModel };
//# sourceMappingURL=list-state.model.js.map