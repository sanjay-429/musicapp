import React from "react";

import musicDB from "./data"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header" style={{height:"150px", width:"100%", background:"#ff0040", marginBottom:"20px"}}> 
        <h1 style={{marginLeft:"43%"}}>Music app</h1>
        </div>
      <div className="first">
         {musicDB.map((item=>{
           return(<>
           
           <div className="second">
             <img src={item.img} alt="img loded"/>
             <div><strong>{item.name}</strong></div>
            
           </div>
          
           </>)
         }))}
          </div>  
    </div>
  );
}

export default App;
