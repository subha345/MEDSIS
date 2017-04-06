import { createStore, applyMiddleware } from 'redux';
import thunnkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const middleWareStore = applyMiddleware(thunnkMiddleware)(createStore);

export default function configureStore() {
    return middleWareStore(rootReducer);
}