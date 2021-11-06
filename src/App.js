import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About";
import AddDestination from "./Pages/AddDestination/AddDestination";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/addDestination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
