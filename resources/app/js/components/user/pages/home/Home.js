import React from "react";
import Balance from "./sections/Balance";
import Transactions from "./sections/Transactions";

function Home() {
    return (
        <>
            <div className="container mx-auto p-8 h-screen">
                <div className="max-w-md w-full mx-auto">
                    <h1 className="text-4xl text-center mb-8 font-thin">
                        Home
                    </h1>
                    <Balance />
                    <div className="mt-4">
                     <Transactions />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
