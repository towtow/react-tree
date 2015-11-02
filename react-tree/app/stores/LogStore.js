import mkStore from './utils/mkStore';
import Immutable from 'immutable';

export default mkStore(Immutable.List(), (_key, _payload, state, event) => state.push(event));
