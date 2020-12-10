import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import jQuery from "jquery";
import { render } from '@testing-library/react';
window.$ = window.jQuery = jQuery;

<Control onChangeMode={function (_mode) {
  this.setState({ mode : _mode});
}.bind(this)}></Control>

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="App">
              <div className="lay1"></div>
              <div className="lay2">
                  <div></div>
              </div>
              <div className="lay3"></div>
              <div className="lay4">
                <div className="rock-area"><img className="rock-size" id="rock" src = {rock} onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('rock');
                }}></img></div>
                <div className="scissors-area"><img className="scissors-size" id="scissors" src = {scissors}></img></div>
                <div className="paper-area"><img className="paper-size" id="paper" src= {paper}></img></div>
              </div>
        </div>
    </Fragment>
    );
  }
  
}
export default App;





