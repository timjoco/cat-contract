import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Landing = () => <h2>Landing</h2>;
const Adopt = () => <h2>Adopt</h2>;
const CatInfo = () => <h2>Enter Cat Info</h2>;
const AdopterInfo = () => <h2>Enter Adopter Info</h2>;
const Contract = () => <h2>Complete Cat Contract</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/adopt" component={Adopt} />
          <Route exact path="/adopt/cat_info" component={CatInfo} />
          <Route exact path="/adopt/adopter_info" component={AdopterInfo} />
          <Route exact path="/adopt/contract" component={Contract} />
        </div>
    </BrowserRouter>
    </div>
  );
};

export default App;