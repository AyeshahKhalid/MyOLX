import React from 'react';
 import {Header,Slider,ChildHeader,Products,Products2,Footer} from '../Components/Layout'
 
 class AppHome extends React.Component{
    render(){
      return(
      <div>
        <Header/>
        <ChildHeader/>
        <Slider/>
        <Products/>
        <Products2/>
        <Footer/>
      </div>  
      )
    }
  }
  export default AppHome;
