import React from 'react';
// import logo from './logo.svg';
 import './App.css';
import Approuter from './Config/router'

class App extends React.Component{
  render(){
    return(
    <div>
      <Approuter/>
    </div>  
    )
  }
}
/////////////////////////array 
// class App extends React.Component{
//   render(){
//     let todoarr=[
//       {item:"ayesha"},
//       {item:"salman"}
//     ]
//     return(
//      <ul>
//        {todoarr.map((a,b)=>{
//          return <li key={b}>{a.item}</li>
//        })}
//      </ul> 
//     )
//   }
// } 
// class Apps extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       name:"Ayesha"
//     }
//   }
//   set_name=()=>{
//     this.setState({name:"khalid"})
//   }
//   get_name=()=>{
//     console.log(this.state.name)
//   }
//   render(){
//     return(
//       <div>
//         <Adspost/>
//         <h2>{this.state.name}</h2>
//         <button onClick={this.get_name}>getname</button>
//         <button onClick={this.set_name}>setname</button>
//       </div>
//     ) 
//   }
// }


// function App() {
//   return (
//     //Jsx=html+javascript 
//     <div>
//      <p>hello</p>
//     </div>
//   );
// }

export default App;
