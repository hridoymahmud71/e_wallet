import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";


function Bottombar() {

  let location = useLocation();


    return (
        <>
            <div className="bg-white border h-20 fixed w-full bottom-0 flex items-center justify-around px-8">
                <div
                    className="flex flex-col flex-1 items-center cursor-pointer"
                    onClick={() => MYAPP.navigate("/admin")}
                >
                    <div
                        className={`text-lg ${
                            location.pathname == "/admin"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        <MdOutlineDashboard />
                    </div>
                    <div
                        className={`fs-10 font-normal my-2 ${
                            location.pathname == "/admin"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        Dashboard
                    </div>
                </div>
                
                <div
                    className="flex flex-col flex-1 items-center cursor-pointer"
                    onClick={() => MYAPP.navigate("/logout")}
                >
                    <div
                        className={`text-lg text-red-600`}
                    >
                        <BiLogOut />
                    </div>
                    <div
                        className={`fs-10 font-normal my-2 text-red-600`}
                    >
                        Logout
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bottombar;
