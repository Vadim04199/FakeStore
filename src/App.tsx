import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Auth} from "./pages/Auth"
import {Basket} from "./pages/Basket"
import {Registration} from "./pages/Registration"
import { AppRoutes } from './components/AppRoutes';
import { NavBar } from './components/NavBar';

function App() {
    return(
        <>
            {/*<Navigation/>*/}
            <NavBar />
            <AppRoutes />
        </>
    )
}

export default App;
