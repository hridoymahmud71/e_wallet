import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Helper from "./../../utils/Helper";
import * as Constants from "./../../utils/Constants";
import { setUser, setUserCurrency } from "./../../redux/user/UserAction";
import Authenticating from "./../../components/common/pages/Authenticating";
import AuthRepository from "./../../repositories/AuthRepository";

function AuthenticatedUserMiddleware({ children, role }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserReducer.user);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (user != null) {
            set_auth(user);
        } else if (
            user == null &&
            Helper.getFromLocalStorage(
                Constants.LOCAL_STORAGE_KEYS.USER_TOKEN
            ) != null
        ) {
            fetchUser();
        }
    }, []);

    useEffect(() => {
        if (user != null) {
            set_auth(user);
        }
    }, [user]);

    function set_auth(user) {
        if (user.role != role) {
            MYAPP.navigate("/unauthorized");
            return;
        }

        setAuthenticated(true);
    }

    function fetchUser() {
        AuthRepository.fetch_authenticated_user()
            .then((response) => {
                if (response.data.result == false) {
                    return;
                }

                dispatch(setUser(response.data.user, response.data.token));
                if (response.data.user.wallet != null) {
                    dispatch(
                        setUserCurrency(
                            response.data.user.wallet.default_currency
                        )
                    );
                }
            })
            .catch((error) => {
                if (error) {
                }
            })
            .then(function () {});
    }

    return (
        <>
            {!authenticated && <Authenticating />}
            {authenticated && children}
        </>
    );
}

export default AuthenticatedUserMiddleware;
