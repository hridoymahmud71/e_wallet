import React from "react";

function Nomatch() {
    return (
        <>
            <div className="container mx-auto p-8 h-screen flex items-center justify-center">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">404</h1>
                    <h2 className="text-2xl text-center mb-8">
                        Page Not Found
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Nomatch;
