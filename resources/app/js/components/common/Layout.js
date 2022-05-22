import React, { useState, useEffect } from "react";
import CommonRouting from "../routing/CommonRouting";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthRepository from "./../../repositories/AuthRepository";
import Helper from "./../../utils/Helper";
import * as Constants from "./../../utils/Constants";
import { setUser, setUserCurrency } from "./../../redux/user/UserAction";

function Layout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);
    const user = useSelector((state) => state.UserReducer.user);

    useEffect(() => {
        MYAPP.navigate = navigate;
        setMounted(true);

        if (
            Helper.getFromLocalStorage(
                Constants.LOCAL_STORAGE_KEYS.USER_TOKEN
            ) != null
        ) {
            fetchUser();
        }
    }, []);

    useEffect(() => {
        if (user != null) {
            if (user.role == "user") {
                MYAPP.navigate("/");
            } else if (user.role == "admin") {
                MYAPP.navigate("/admin");
            } else {
                MYAPP.navigate("/login");
            }
        }
    }, [user]);

    if (!mounted) {
        return "";
    }

    function fetchUser() {
        AuthRepository.fetch_authenticated_user()
            .then((response) => {
                if (response.data.result == false) {
                    MYAPP.navigate("/login");
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
                    MYAPP.navigate("/login");
                }
            })
            .then(function () {});
    }

    return (
        <div className="flex flex-col min-h-screen">
            <CommonRouting />
        </div>
    );
}

export default Layout;
