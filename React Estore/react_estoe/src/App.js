import MenuItem from "./components/MenuItem";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";
import Updateproduct from "./components/Update&singleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NormalUser from "./components/NormalUserDash";
import AdminUser from "./components/AdminUser";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer />
          <MenuItem />
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              background: "lightgreen",
              color: "brown",
              //   backgroundColor: "white",
            }}
          >
            Rizwan E-Mart
          </Typography>

          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/products/update/:id" component={Updateproduct} />
            <Route path="/detailedProduct" component={ProductDetail} />
            {/* <Route path="/products/:page?" component={Products} /> */}
            <Route path="/normalUser" component={NormalUser} />
            <Route path="/adminUser" component={AdminUser} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
