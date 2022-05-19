import { NAVIGATION } from './../../utils/Constants';

const initialState = {
    userFetched: false,
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case NAVIGATION.USER_FETCHED:
            return {
                ...state,
                userFetched: action.payload.userFetched,
            };
     
        default:
            return state;
    }
}