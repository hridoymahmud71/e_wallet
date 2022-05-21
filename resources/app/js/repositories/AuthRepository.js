import {api} from './../Api';
class AuthRepository {

    static login = (post_body) => {
        return api.post("/auth/login", post_body);
    };
    static  fetch_authenticated_user = () => {
        return api.post("/fetch-authenticated-user", { token: `${Helper.getFromLocalStorage(
            Constants.LOCAL_STORAGE_KEYS.USER_TOKEN
        )}` });
    };

    static logout = () => {
        return api.get("/logout");
    };
}

export default AuthRepository;