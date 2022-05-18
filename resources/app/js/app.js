import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import GlobalSuspenseLoader from './components/GlobalSuspenseLoader';
import { BrowserRouter } from "react-router-dom";
import Helper from "./utils/Helper";
import Layout from "./components/common/Layout";


// main app starts from here
function App() {

    return (
        <Suspense
            fallback={<GlobalSuspenseLoader />}
        >
            <BrowserRouter basename={Helper.get_basename()}>
                <Layout/>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
