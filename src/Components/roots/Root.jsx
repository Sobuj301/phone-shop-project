import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="p-8 shadow-md">
               <Navbar></Navbar>
            </div>
           <div className="mt-10">
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;