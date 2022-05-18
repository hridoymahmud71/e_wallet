import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import GlobalSuspenseLoader from './components/GlobalSuspenseLoader'

// main app starts from here
function App() {

    return (
        <Suspense 
        fallback={<GlobalSuspenseLoader/>}
        >
            <div className="bg-blue-200">Hello world</div>
        </Suspense>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
