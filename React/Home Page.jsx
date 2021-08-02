import React  from 'react'
import {BrowserRouter as Router, Link, Route, Router, Switch} from "react-router-dom";
import Home from "./Home Page";
import About from "./About";
import Profile from './Profile';
import users from "./Users";
import "./index.css";

class Home extends Component {
    render() {
        return (
            
            <div>
               <h1>Resume</h1>
                <ul className="hearder">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul> 
                <div className="content">
                    <Route path="/about" Component={About}/>
                    <Route path="/profile" Component={Profile}/>
                    <Route path="/users" component={Users}/>
                </div>
            </div>
                
                
            
        );
    }
}

export default Home;

        
            
        
       
