import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
import Home from "./Home";
import About from "./About";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Tester() {
    return(
        <React.Fragment>
            <Header></Header>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Tester;