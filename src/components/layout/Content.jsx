import React from "react";
import './Content.css'
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home"
import About from "../../views/examples/About"

const Content = props => (
    <main className="Content">
        <Routes >
            <Route path="/about" element={<About />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
)

export default Content