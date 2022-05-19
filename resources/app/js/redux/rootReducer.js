import {combineReducers} from 'redux';

import UserReducer from './user/UserReducer';
import NavigationReducer from './navigation/NavigationReducer';

const rootReducer = combineReducers({
    UserReducer,
    NavigationReducer
})

export default rootReducer;
