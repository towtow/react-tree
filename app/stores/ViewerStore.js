import Store from './Store';

var selectedNode;

var ViewerStore = Store(null, null);
//new Map([ //
//    handleEvent(e, changed) {
//        switch (e.eventName) {
//            case 'select':
//                //viewerThing.select(e.node.data.oid);
//                break;
//        }
//        changed();
//        return true;
//    }, selectionInViewerChanged(e, changed) {
//        changed();
//        return true;
//    }
//});

//viewer.onSelect(ViewerStore.selectionInViewerChanged);

export default ViewerStore;
