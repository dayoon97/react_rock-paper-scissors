import React from 'react';
import './App.css';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

function App() {
  return (
    <div className="App">
        <div className="lay1"></div>
        <div className="lay2"></div>
        <div className="lay3"></div>
        <div className="lay4">
          <div className="rock-area"><img className="rock-size" id="rock" src = {rock}></img></div>
          <div className="scissors-area"><img className="scissors-size" id="scissors" src = {scissors}></img></div>
          <div className="paper-area"><img className="paper-size" id="paper" src= {paper}></img></div>
        </div>
    </div>
  );
}


function hover() {
    (document).on('click', '#rock', function(event){
        console.log("ㅇㅇ");
      
    });
}

export default App;