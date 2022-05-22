import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";


function Bottombar() {

  let location = useLocation();


    return (
        <>
            <div className="bg-white border h-20 fixed w-full bottom-0 flex items-center justify-around px-8">
                <div
                    className="flex flex-col flex-1 items-center cursor-pointer"
                    onClick={() => MYAPP.navigate("/")}
                >
                    <div
                        className={`text-lg ${
                            location.pathname == "/"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        <AiOutlineHome />
                    </div>
                    <div
                        className={`fs-10 font-normal my-2 ${
                            location.pathname == "/"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        Home
                    </div>
                </div>

                <div
                    className="flex flex-col flex-1 items-center cursor-pointer"
                    onClick={() => MYAPP.navigate("/transfer")}
                >
                    <div
                        className={`text-lg ${
                            location.pathname == "/transfer"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        <GiReceiveMoney />
                    </div>
                    <div
                        className={`fs-10 font-normal my-2 ${
                            location.pathname == "/transfer"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        Transfer
                    </div>
                </div>

                <div
                    className="flex flex-col flex-1 items-center cursor-pointer"
                    onClick={() => MYAPP.navigate("/settings")}
                >
                    <div
                        className={`text-lg ${
                            location.pathname == "/settings"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        <AiOutlineSetting />
                    </div>
                    <div
                        className={`fs-10 font-normal my-2 ${
                            location.pathname == "/settings"
                                ? "text-gray-800"
                                : "text-gray-400"
                        }`}
                    >
                        Settings
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
