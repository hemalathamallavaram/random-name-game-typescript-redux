import {nameReducer} from './reducers';
import {createStore} from 'redux';

// const rootReducer = combineReducers({
//     name:nameReducer
// })
const store = createStore(nameReducer);
export default store;

// export type RootState = ReturnType<typeof rootReducer>