import React, { Fragment } from 'react';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import './Choice.css';
import Choice2 from './Choice2';

const Choice = () => {
 

  return (
    <Fragment>
      <div className="App">
        <div className="lay1"></div>
        <div className="lay2">
          {<Choice2/>}
          <div className="paper">
            <img src={paper} alt="paper" className="paImg" />
          </div>
        </div>
        <div className="lay3"></div>
        <div className="lay4">
          <div className="rock-area">
            <img className="rock-size" id="rock" src={rock} alt="rock" onClick={this.onClickRock}/>
          </div>
          <div className="scissors-area">
            <img className="scissors-size" id="scissors" src={scissors} alt="scissors" onClick={this.onClickScissors} />
          </div>
          <div className="paper-area">
            <img className="paper-size" id="paper" src={paper} alt="paper" onClick={this.onClickRockPaper} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Choice;