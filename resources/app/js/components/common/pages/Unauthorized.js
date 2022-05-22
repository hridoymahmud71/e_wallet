import React from "react";

function Unauthorized() {
    return (
        <>
            <div className="container mx-auto p-8 h-screen flex items-center justify-center">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        Unauthorized
                    </h1>
                    <h2 className="text-2xl text-center mb-8">
                        Please, Log in
                    </h2>
                    <button
                        type="button"
                        className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                        onClick={() => MYAPP.navigate("/login")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}

export default Unauthorized;
