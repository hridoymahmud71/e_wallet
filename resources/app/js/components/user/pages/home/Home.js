import React, { useEffect } from "react";
import Bottombar from "../../partials/Bottombar";
import Balance from "./sections/Balance";
import Transactions from "./sections/Transactions";

function Home() {
    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="container mx-auto px-8 pt-8 pb-24 min-h-screen">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-4xl text-center mb-8 font-thin">
                            Home
                        </h1>
                        <Balance />
                        <div className="mt-12">
                            <Transactions />
                        </div>
                    </div>
                </div>

                <Bottombar />
            </div>
        </>
    );
}

export default Home;
