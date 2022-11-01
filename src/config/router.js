import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import Login from "../screens/login";
import StdForm from "../screens/stdform";
import Dashboard from "../screens/dashboard";
import NotFound from "../screens/notfound";
import Admin from "../screens/admin";
import Users from "../screens/users";


export default function AppRouter() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="Login" element={<Login />} /> */}
                    <Route path="Admin" element={<Admin />} />
                    <Route path="StdForm" element={<StdForm />} />
                    <Route path="Users" element={<Users />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Router>
        </>
    )
}