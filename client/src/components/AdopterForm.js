import React, { Component } from 'react';

class AdopterForm extends Component {
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="First Name" id="first_name" type="text" class="validate" ></input>
            </div>
            <div class="input-field col s6">
              <input placeholder="Last Name" id="last_name" type="text" class="validate"></input>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Address" id="address" type="text" class="validate"></input>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Email" id="email" type="email" class="validate"></input>
            </div>
          </div>
        </form>
        <a class="waves-effect waves-light btn">submit</a>
      </div>
    );
  } 
}

export default AdopterForm;