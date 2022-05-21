
import { USER, LOCAL_STORAGE_KEYS } from './../../utils/Constants';
import Helper from './../../utils/Helper';


export function userFetched() {
    return {
        type: NAVIGATION.USER_FETCHED,
        payload: {
            userFetched:true
        }
    }
}

