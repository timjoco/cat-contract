import React, { Component } from 'react';

class CatForm extends Component {
  render() {
    return (
      <div>
      <h3>Please enter the Cat's information</h3>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Identification Number" id="first_name" type="text" class="validate" ></input>
            </div>
            <div class="input-field col s6">
              <input placeholder="Cat's Name" id="last_name" type="text" class="validate"></input>
            </div>
          </div>
        </form>
        <a class="waves-effect waves-light btn">submit</a>
      </div>
      </div>
    );
  } 
}

export default CatForm;