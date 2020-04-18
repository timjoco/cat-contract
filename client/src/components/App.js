import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import AdopterForm from './AdopterForm';
import CatForm from './CatForm';
import Landing from './Landing';


const Adopt = () => <h2>Adopt</h2>;
const Contract = () => <h2>Complete Cat Contract</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/adopt" component={Adopt} />
            <Route exact path="/adopt/cat_info" component={CatForm} />
            <Route exact path="/adopt/adopter_info" component={AdopterForm} />
            <Route exact path="/adopt/contract" component={Contract} />
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);