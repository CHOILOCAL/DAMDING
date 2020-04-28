import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

// ************************ store 생성
// initialize our store
// setup thunk middleware
// call verifyAuth() action
// export our function for provide it to roop of our app

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );
    
    store.dispatch(verifyAuth());
    return store;
}

