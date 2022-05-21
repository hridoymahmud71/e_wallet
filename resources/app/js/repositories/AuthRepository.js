import { api } from "./../Api";
import Helper from "./../utils/Helper";
import * as Constants from "./../utils/Constants";
class AuthRepository {
    static login = (post_body) => {
        return api.post("/auth/login", post_body);
    };
    static fetch_authenticated_user = () => {
        let post_body = {
            token: `${Helper.getFromLocalStorage(
                Constants.LOCAL_STORAGE_KEYS.USER_TOKEN
            )}`
        };
        return api.post("auth/fetch-authenticated-user",post_body);
    };

    static logout = () => {
        return api.get("auth/logout");
    };
}

export default AuthRepository;
