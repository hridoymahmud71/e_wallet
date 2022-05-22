import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Helper from "./../../utils/Helper";
import * as Constants from "./../../utils/Constants";
import { setUser, setUserCurrency } from "./../../redux/user/UserAction";

function AuthenticatedUserMiddleware({ children }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.UserReducer.user);

    return <div>AuthenticatedUserMiddleware</div>;
}

export default AuthenticatedUserMiddleware;
