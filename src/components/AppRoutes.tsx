import {Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { Auth } from "../pages/Auth";
import { Basket } from "../pages/Basket";
import { ProductsPage } from "../pages/ProductsPage";
import { Registration } from "../pages/Registration";

export function AppRoutes(){
    return (
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path = "/registarion" element={<Registration />}/>
        <Route path = "/basket" element = {<Basket />} />
    </Routes>
    )
}