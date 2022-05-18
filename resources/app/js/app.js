import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import GlobalSuspenseLoader from './components/GlobalSuspenseLoader';
import { BrowserRouter } from "react-router-dom";
import Helper from "./utils/Helper";


// main app starts from here
function App() {

    return (
        <Suspense
            fallback={<GlobalSuspenseLoader />}
        >
            <BrowserRouter basename={Helper.get_basename()}>
                <div className="bg-blue-200">Hello world</div>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
