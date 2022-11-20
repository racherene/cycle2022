import React from 'react';
import '../App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Journey from "./Journey/Journey";
import AboutUs from "./AboutUs";
import Results from "./Journey/Results"


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation></Navigation>
                
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/journey' element={<Journey></Journey>}></Route>
                    <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
                    <Route path='/results' element={<Results></Results>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
