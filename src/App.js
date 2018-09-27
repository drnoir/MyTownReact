import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import _ from 'lodash';
import MetaTags from 'react-meta-tags';
import icon from'./icon.jpg';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import GoogleAds from 'react-google-ads';

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  VKIcon,
  TelegramIcon,
  EmailIcon
} from 'react-share';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    value: '',
    subjectTransform: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnRandomSubject = this.returnRandomSubject.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("Email change Clicked");
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log("Email Form Updated");
  }

  returnRandomSubject(e){
    e.preventDefault();
    var rawData = data;
    var randSubject =  _.sample(rawData);
    console.log("random subject selected - ", randSubject);
   
     this.setState(
      {subjectTransform : randSubject}
     );
  };

 
//render content
  render() {

    return (
  
    <div className="App">

       <MetaTags>
      <title>My Town</title>
      <meta name="description" content="A app to change a subject, randomly" />
      <meta property="og:image" content={icon} />
      <meta property="og:title" content="Facebook Open Graph META Tags"/>
      <meta property="og:site_name" content="My Town"/>
      </MetaTags>
        <header className="App-header">
        {/* <i className="fa fa-meh-o fa-5x App-logo" aria-hidden="true"></i> */}
          <h1 className="App-title">My Town</h1>
          
         <div className="form-group">          
          <input type="text" placeholder="Search Towns" className=" App-form" /> 
        </div>    
    
          <ul class="navbar navbar-default">
             
            </ul>
            <ul class="nav nav-pills MenuAlignRight">
                <li className="active"><a href="#">About<span className="sr-only">(current)</span></a></li>
                <li><a href="#">Activate my Card</a></li>
                <li><a href="#">Vendor Login</a></li>
                <li><span className="glyphicon glyphicon-user"></span></li>
            </ul>
        </header>
      </div>
    );
  }
}
export default App;
