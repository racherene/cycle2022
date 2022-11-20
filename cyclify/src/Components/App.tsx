import React from 'react';
import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation></Navigation>
                
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
