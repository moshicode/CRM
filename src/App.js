import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  /*
  // Request API with local dummy data
    async componentDidMount() {
      await setTimeout(() => {
        let data = require('./data.json')
        this.setState({ data: data })
      }, 100)
    }
  */
  // Check if you can remove Fragment
  render() {
    return (
      <Router>
        <React.Fragment>
          <div id="app">
            <Navbar />
            <div className="container">
              <Switch>
                <Redirect exact from="/" to="/clients" />
                <Route path="/clients" exact component={Clients} />
                <Route path="/actions" exact component={Actions} />
                <Route path="/analytics" exact component={Analytics} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
