import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-2 lg:px-0">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Root;