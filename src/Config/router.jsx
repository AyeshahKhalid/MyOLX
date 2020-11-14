import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Posts from '../Components/Post'
import AppHome from '../Components/Home'
class Approuter extends React.Component{
render(){
    return(
        <Router>
            <Route exact path='/' component={AppHome}/>
            <Route exact path='/Post' component={Posts}/>
        </Router>
    )
}
}
export default Approuter ;