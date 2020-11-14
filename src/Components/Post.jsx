import React from 'react';

class Posts extends React.Component{
    render(){
     
      function openCatergory(){
        var arr1=["Tablets","Accessories","Mobile Phones"];
        
var cat1=document.getElementById("cat1")
for(var i=0;i<arr1.length;i++){
var li=document.createElement("li");
var liText=document.createTextNode(arr1[i])
li.appendChild(liText)
cat1.appendChild(li).setAttribute("class","subcategory")
const button=document.querySelector("button")
button.disabled=true
}
      }
        return(
            <div>
                <h1 className="PostHeader">Olx</h1>
                <div className="text-center">
                <h3>Post your Ad</h3>
                <div className="category">
                <h6>CHOOSE A CATEGORY</h6>
                <li><button className="postButton" onClick={openCatergory}>Mobile</button>
                <ul id="cat1">

                </ul>
                </li>
                <li><button className="postButton">Vehicles</button></li>
                <li><button className="postButton">Property for Sale</button></li>
                <li><button className="postButton">Property for Rent</button></li>
                <li><button className="postButton">Electronics and Home Applience</button></li>
                <li><button className="postButton">Bikes</button></li>
                <li><button className="postButton">Business, Industrial  Agriculture</button></li>
                <li><button className="postButton">Services</button></li>
                <li><button className="postButton">Jobs</button></li>
                </div>
                </div>
            </div>
           
        )
    }
}
export default Posts;