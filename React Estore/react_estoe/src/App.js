import MenuItem from "./MenuItem";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Signup from "./Signup";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import Updateproduct from "./Update&singleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NormalUser from "./NormalUserDash";
import AdminUser from "./AdminUser";

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        ToastContainer / >
        <
        MenuItem / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        />{" "} <
        Route path = "/products"
        exact component = { Products }
        />{" "} <
        Route path = "/signup"
        component = { Signup }
        />{" "} <
        Route path = "/login"
        component = { Login }
        />{" "} <
        Route path = "/products/add"
        component = { AddProduct }
        />{" "} <
        Route path = "/products/update/:id"
        component = { Updateproduct }
        />{" "} <
        Route path = "/detailedProduct"
        component = { ProductDetail }
        />{" "} <
        Route path = "/normalUser"
        component = { NormalUser }
        /> <
        Route path = "/adminUser"
        component = { AdminUser }
        />{" "} <
        Route path = "/not-found"
        component = { NotFound }
        />{" "} <
        Redirect to = "/not-found" / >
        <
        /Switch>{" "} <
        Footer / >
        <
        /div>{" "} <
        /Router>
    );
}

export default App;