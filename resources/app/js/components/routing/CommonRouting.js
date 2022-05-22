import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../common/pages/Login";
import Logout from "../common/pages/Logout";
import Nomatch from "../common/pages/Nomatch";
import Unauthorized from "../common/pages/Unauthorized";
import UnauthenticatedUserMiddleware from "../middlewares/UnauthenticatedUserMiddleware";
import AdminRouting from "./AdminRouting";
import UserRouting from "./UserRouting";

function CommonRouting() {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <UnauthenticatedUserMiddleware>
                        <Login/>
                    </UnauthenticatedUserMiddleware>
                }
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<UserRouting />} />
            <Route path="/admin/*" element={<AdminRouting />} />
            <Route path="/404" element={<Nomatch />} />
            <Route path="*" element={<Nomatch />} />
        </Routes>
    );
}

export default CommonRouting;
