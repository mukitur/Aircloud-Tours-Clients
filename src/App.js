import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import AddServices from './Pages/Admin/AddServices/AddServices';
import ManageOrders from './Pages/Admin/ManageOrders/ManageOrders';
import OrderStatus from './Pages/Admin/OrderStatus/OrderStatus';
import Login from './Pages/Login/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivatrRoute/PrivateRoute';
import Booking from './Pages/Admin/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              <Route path='/contact'>
                  <Contact></Contact>
              </Route>
              <PrivateRoute path="/booking/:id">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="/login">
                  <Login></Login>
              </Route>
              <PrivateRoute path="/addservices">
                  <AddServices></AddServices>
              </PrivateRoute>
              <PrivateRoute path="/manageorders">
                  <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute path="/orderstatus">
                  <OrderStatus></OrderStatus>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
