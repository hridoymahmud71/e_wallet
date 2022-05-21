import { USER } from "./../../utils/Constants";

const initialState = {
    user: null,
    user_currency: "",
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
        case USER.SET_USER_CURRENCY:          

        return {
            ...state,
            user_currency: action.payload.currency,
        };
        default:
            return state;
    }
}
