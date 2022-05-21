import React from "react";
import Transfer from "../Transfer";
import Balance from "./sections/Balance";

function Home() {
    return (
        <>
            <div className="container mx-auto p-8 h-screen">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        Home
                    </h1>
                    <Balance />
                    <Transfer />
                </div>
            </div>
        </>
    );
}

export default Home;
