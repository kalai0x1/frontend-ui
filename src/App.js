import React,{useState, createContext} from "react";
import Header from "./Componentts/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import {Routes, Route} from 'react-router-dom'
import { MyContext } from "./Componentts/Contextapi";

function App() {
  const [cart,setCart] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider value={{cart,setCart}}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products/:name" element={<Shop/>}/>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
