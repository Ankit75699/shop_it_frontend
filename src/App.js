import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Footer from "./component/layout/Footer";
import ProductDetails from "./component/product/ProductDetails";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import { loadUser } from "./actions/userAction"
import store from './store'
import Profile from "./component/user/Profile";
import "./App.css";
import ProtectedRoute from './component/route/ProtectedRoute'
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatePassword from "./component/user/UpdatePassword";
import ForgotPassword from "./component/user/ForgotPassword";
import NewPassword from "./component/user/NewPassword";
function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
