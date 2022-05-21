import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthRepository from "./../../../repositories/AuthRepository";
import {
    setUser,
    setUserCurrency,
    clearUser,
} from "./../../../redux/user/UserAction";

import { useSnackbar } from "react-simple-snackbar";

function Logout() {
    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user);

    const [openSnackbar, closeSnackbar] = useSnackbar();

    useEffect(() => {
        logout();
    }, []);

    function processLogout() {
        dispatch(clearUser());
        dispatch(setUserCurrency(""));
        MYAPP.navigate("/login");
    }

    function logout() {
        AuthRepository.logout()
            .then((response) => {
                if (response.data.result == false) {
                    openSnackbar(response.data.message, 2500);
                    processLogout();
                    return;
                }

                openSnackbar(response.data.message, 2500);
                processLogout();
            })
            .catch((error) => {
                if (error) {
                    openSnackbar(error.response.data.message, 2500);
                    processLogout();
                }
            })
            .then(function () {});
    }

    return (
        <>
            <div className="container mx-auto p-8 h-screen flex items-center justify-center">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        Loggin out ...
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Logout;
