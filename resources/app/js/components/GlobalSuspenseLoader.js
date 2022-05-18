import React, { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

function GlobalSuspenseLoader() {
    return (
        <div className="h-screen flex items-center justify-center">
            <InfinitySpin heigth="400"
                width="400"
                color="grey"
                arialLabel="loading-indicator" />
        </div>
    );
}

export default GlobalSuspenseLoader;
