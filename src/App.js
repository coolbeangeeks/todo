import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Component/Todo";

const App =()=>{
    return (
        <div className="bg-stone-900 grid py-4 min-h-screen">
            <Todo/>

        </div>
   
    

    );
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)