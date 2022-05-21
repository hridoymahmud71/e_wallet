import React, { useState, useEffect } from "react";
import AdminRouting from "../routing/AdminRouting";
import CommonRouting from "../routing/CommonRouting";
import UserRouting from "../routing/UserRouting";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);
    const user = useSelector((state) => state.UserReducer.user);

    useEffect(() => {
        MYAPP.navigate = navigate;
        setMounted(true);
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

    return (
        <div className="flex flex-col min-h-screen">
            <CommonRouting />
        </div>
    );
}

export default Layout;
