import React from 'react'
import SearchIconblack from '../images/SearchIconblack.png'
import slideimg from '../images/slide.png'
import footerimage from '../images/footerimg.png'
import productimg from '../images/productimg.png'
import bikeimg from '../images/bikeimg.png'
import paperimg from '../images/paperimg.png';
import phoneimg from '../images/phoneimg.png';
import { Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light olxnav">
                    <a className="navbar-brand olxnav" href="#">Navbar</a>

                    <select className="NavInput" name="" >
                        <option value="" selected>Pakistan </option>
                        <option value="">Punjab</option>
                        <option value="">Islamabad</option>
                        <option value="">Sindh</option>
                        <option value="">Khyber Pakhtunkhwa</option>
                    </select>



                    <input className="NavInput" type="text" placeholder="Find Cars, Mobile Phones and more..." style={{ width: "50%" }} />
                    <button className="Searchbtn"><img src={SearchIconblack} alt="" width="35px" /></button>



                    <button className="loginBtn"><strong>Login</strong></button>
                    <Link to="/Post"><button className="SellBtn">+SELL</button></Link>

                </nav>

            </div>

        )
    }
}
class ChildHeader extends React.Component {
    render() {
        return (
            <div >
                <ul className="ChildHeadnav" >
                    <li><b> All Categories &nbsp;&nbsp;</b></li>
                    <li>Mobile Phones</li>
                    <li>Cars</li>
                    <li>Motorcycles</li>
                    <li>House</li>
                    <li>TV-Video-Audio</li>
                    <li>Tablets</li>
                    <li>Land  Plots</li>
                </ul>
            </div>

        )
    }
}
class Slider extends React.Component {
    render() {
        return (
            <div id="sliderolx">
                <img src={slideimg} width="100%" alt="" />
            </div>
        )
    }
}
class Products extends React.Component {
    render() {

        return (
            <div className="container lastSearch">
            <h4>Based on your last search</h4>
            <div className="row ml-1">  
                <div className="col-md-3 card">
                    <img className="card-img-top" src={productimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 6500-7500 | Weekly</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                <div className="col-md-3 card">
                    <img className="card-img-top" src={productimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 6500-7500 | Weekly</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                <div className="col-md-3 card">
                    <img className="card-img-top" src={productimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 6500-7500 | Weekly</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                
                </div>
                </div>
        )
    }
}
class Products2 extends React.Component {
    render() {

        return (
            <div className="container product2">
            <h4>Fresh recommendations</h4>
            <div className="row ml-1">  
                <div className="col-md-3">
                    <img className="card-img-top" src={bikeimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Heavy Bikes Latest Model</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={bikeimg} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Heavy Bikes Latest Model</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={bikeimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Heavy Bikes Latest Model</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={bikeimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Heavy Bikes Latest Model</p>
                        </div>
                </div>
                
                </div>

                <div className="row ml-1 product3">  
                <div className="col-md-3">
                    <img className="card-img-top" src={paperimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={paperimg} alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={paperimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                <div className="col-md-3">
                    <img className="card-img-top" src={paperimg} alt="Card image cap"/>
                        <div className="card-body">
                            <h6 className="card-title">Rs 420000</h6>
                            <p className="card-text">Apply for online typing job</p>
                        </div>
                </div>
                
                </div>
                </div>
        )
    }
}
class Footer extends React.Component {
                    render() {
                    let popularCat = [{ item: "Cars" }, { item: "Flats for rent" }, { item: "Jobs" }, { item: "Mobile Phones" }]
        let trending = [{ item: "Bikes" }, { item: "Watches" }, { item: "Books" }, { item: "Dogs" }]
        let About = [{ item: "About OLX Group" }, { item: "OLX Blog" }, { item: "Contact Us" }, { item: "OLX for Businesses" }]
        let OLX = [{ item: "Help" }, { item: "Sitemap" }, { item: "Legal & Privacy information" }]
        return (
                <div>
                    <div>
                        <img src={footerimage} width="100%" alt="" />
                    </div>
                    <div className="container-fluid check">
                        <div className="row footerSec ">
                            <div className="col-md-2 ">POPULAR CATEGORIES
                <ul className="footleft">
                                    {popularCat.map((a, index) => {
                                        return <li key={index}>{a.item}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-2">TRENDING SEARCHES
                <ul className="footleft">
                                    {trending.map((a, index) => {
                                        return <li key={index}>{a.item}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-2">ABOUT US
                <ul className="footleft">
                                    {About.map((a, index) => {
                                        return <li key={index}>{a.item}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-2">OLX
                <ul className="footleft">
                                    {OLX.map((a, index) => {
                                        return <li key={index}>{a.item}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-2">FOLLOW US</div>
                        </div>

                    </div>
                    <div className="footerparent container-fluid">

                        <p >Other Countries India - South Africa - Indonesia</p>
                        <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                    </div>
                </div>
        )
    }
}
export {
                    Header,
                    Slider,
                    ChildHeader,
                    Products,
                    Products2,
                    Footer
                }      