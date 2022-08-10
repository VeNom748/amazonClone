import React, { useEffect } from "react";
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Login } from './components/Login/Login';
import { Regestration } from './components/Login/Regestration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./components/firebase";
import { useStateValue } from './components/StateProvider';
import { Payment } from './components/payment/Payment';
import { OrderPlaced } from './components/payment/OrderPlaced';




function App() {
  const [state, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>>>", authUser)
      
      if (authUser) {
        //the user are logged in
        dispatch({ type: "SET_USER", user:authUser })


      } else {
        //the user are logged out
        dispatch({type:"SET_USER" , user:null})
      }

    })
  
  }, [])//will run once when the app component loaded



  return (
    <div className="App">
      <Router>   
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/regester">
            <Regestration />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/orderplaced">
            <Header />
            <OrderPlaced />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
