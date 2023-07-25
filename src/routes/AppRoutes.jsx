import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './../pages/Home';
import About from "../pages/About";
import SelectedProject from "../pages/SelectedProject";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project/:id" element={<SelectedProject/>}/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default AppRoutes;