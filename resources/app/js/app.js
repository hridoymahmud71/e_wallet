import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import GlobalSuspenseLoader from './components/GlobalSuspenseLoader';
import { BrowserRouter } from "react-router-dom";
import Helper from "./utils/Helper";
import Layout from "./components/common/Layout";
import { Provider } from 'react-redux'
import store from './redux/store';

// main app starts from here
function App() {

    return (

        <Suspense
            fallback={<GlobalSuspenseLoader />}
        ><Provider store={store}>
                <BrowserRouter basename={Helper.get_basename()}>
                    <Layout />
                </BrowserRouter>
            </Provider>

        </Suspense>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
