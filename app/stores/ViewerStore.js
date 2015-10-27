import {EventEmitter} from 'events';

var selectedNode;

function changed() {
    // todo
}

var ViewerStore = {
    handleEvent(e) {
        switch (e.eventName) {
            case 'select':
                //viewerThing.select(e.node.data.oid);
                break;
        }
        changed();
        return true;
    },
    selectionInViewerChanged(e) {
        changed();
        return true;
    }
};

//viewer.onSelect(ViewerStore.selectionInViewerChanged);

export default ViewerStore;
