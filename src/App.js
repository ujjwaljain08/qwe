 import './App.css';
 
 
import axios from "axios";
import { useEffect } from 'react';
import Registration from './component/Registration/Registration';
import Feedback from './component/Feedback/Feedback';
import Header from './component/Header/Header';
import Admin from './component/Admin/Admin';
import Course from './component/course/Course';
import FBadmin from "./component/Admin/FBadmin"
import User from './component/Admin/User';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Viewcourse from './component/Login/Viewcourse';
import Updatedt from "./component/Login/Updatedt"
 function App() {
  
  
  return (
    <div>    
      {/* <Header />    */}
    <Router>
      <Switch>
      <Route path="/home" component={Home} exact />
        <Route path="/registration" component={Registration} exact />
        <Route path="/fb" component={Feedback} exact />
        <Route path="/courses" component={Course} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/fbadmin" component={FBadmin} exact />
        <Route path="/user" component={User}  exact/>
        <Route path="/login" component={Login}  exact/>
        <Route path="/viewcourse" component={Viewcourse}  exact/>
        <Route path="/updatedt" component={Updatedt}  exact/>
    
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
//217:,  

  // {/* <Registration /> */}
  //   {/* <Feedback /> */}
  //   {/* <Admin /> */}
  //   {/* <Course /> */}
  //   {/* <FBadmin /> */}
  //   {/* <User /> */}