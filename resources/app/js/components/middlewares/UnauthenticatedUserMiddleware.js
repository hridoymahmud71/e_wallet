import React, { useState, useEffect } from "react";
import { setUser, setUserCurrency } from "./../../redux/user/UserAction";
import { useSelector, useDispatch } from "react-redux";
import Helper from "./../../utils/Helper";
import * as Constants from "./../../utils/Constants";
import AuthRepository from "./../../repositories/AuthRepository";

function UnauthenticatedUserMiddleware({ children }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserReducer.user);

    useEffect(() => {
        if (user != null) {
            set_navigate(user);
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
            set_navigate(user);
        }
    }, [user]);

    function set_navigate(user) {
        if (user.role == "user") {
            MYAPP.navigate("/");
        } else if (user.role == "admin") {
            MYAPP.navigate("/admin");
        }
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

    return children;
}

export default UnauthenticatedUserMiddleware;
