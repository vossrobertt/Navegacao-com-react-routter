import React from "react";
import './App.css'

import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";

import { BrowserRouter } from  'react-router-dom';

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)
    
export default App