
import { USER, LOCAL_STORAGE_KEYS } from './../../utils/Constants';
import Helper from './../../utils/Helper';


export function setUser(user, token) {
    setUserToken(token);
    return {
        type: USER.SET_USER,
        payload: {
            user
        }
    }
}

export function setUserCurrency(currency) {
    return {
        type: USER.SET_USER_CURRENCY,
        payload: {
            currency
        }
    }
}

export function clearUser() {
    setUserToken("");
    return {
        type: USER.CLEAR_USER,
    }
}

export function setUserToken(token) {
    Helper.setLocalStorage(LOCAL_STORAGE_KEYS.USER_TOKEN, token);
}