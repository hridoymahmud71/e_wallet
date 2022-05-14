import React, { Suspense } from "react";
import ReactDOM from "react-dom";


// main app starts from here
function App() {

    return (
        <>
            <div className="bg-blue-200">Hello world</div>
        </>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
