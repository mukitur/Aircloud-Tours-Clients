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

function App() {
  return (
    <div className="App">
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
            <Route path="/addservices">
                <AddServices></AddServices>
            </Route>
            <Route path="/manageorders">
                <ManageOrders></ManageOrders>
            </Route>
            <Route path="/orderstatus">
                <OrderStatus></OrderStatus>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
