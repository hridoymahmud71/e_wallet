
import { USER, LOCAL_STORAGE_KEYS } from './../../utils/Constants';
import Helper from './../../utils/Helper';


export function userFetched() {
    return {
        type: USER.SET_USER,
        payload: {
            userFetched:true
        }
    }
}

