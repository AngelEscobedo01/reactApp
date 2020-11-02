import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './components/pages/Home/Home.js';
import Navbar from './components/Navbar'
import FormPage from './components/pages/Forms/Forms.js';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      testChange: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }


  render() {
    return(
      // <input type="text" name="testChange" placeholder="test me here" onChange={this.handleChange}></input>

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/forms' component={FormPage} />
          {/* <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    )
    
  }
}
export default App;
