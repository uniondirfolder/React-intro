import React from "react";
import ReactDOM from "react-dom";



const App = () =>{
        
    return (
        <div>
            <Book name ="React" year="2019" price="1000"/>
            <Book name ="JS" year="2021" price="2000"/>
        </div>
    );
}

const rootElement = document.getElementById("root");
   ReactDOM.render(
       <React.StrictMode>
            <App />
       </React.StrictMode>,
       rootElement
   );