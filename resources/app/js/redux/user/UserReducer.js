import { USER } from './../../utils/Constants';

const initialState = {
    user: null,
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case USER.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case USER.CLEAR_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}