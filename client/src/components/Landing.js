import React from 'react';
import { HomeIcon1 } from '../icons/ProjectIcons';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div class="row">
        <div class="col s12"><span class="flow-text">
          <h2>Simplifying cat adoptions with the Petco Foundation</h2>
          </span></div>
      </div>
      <div class="row">
        <div class="col s6">
          <p class="promo-caption">Easy To Use</p>
          <p class="light center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col s6">
          <p class="promo-caption">Designed For Animal Shelters</p>
          <p class="light center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;