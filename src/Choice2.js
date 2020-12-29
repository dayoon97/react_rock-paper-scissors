import React from 'react';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import './Choice.css';
import Random from './Random.js';

class Choice2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {img: 0, img2: 0, youSum: 0, comSum: 0};
      this.onClickRock = this.onClickRock.bind(this);
      this.onClickPaper = this.onClickPaper.bind(this);
      this.onClickScissors = this.onClickScissors.bind(this);
    }

    onClickRock() {
      
      this.setState(prevState => ({
        img: 1,
        img2: Random()
      }));

      if(this.state.img2 === 1){
        this.setState(prevState => ({
          youSum: this.state.youSum + 1
        }));
      } else if(this.state.img2 === 3){
        this.setState(prevState => ({
          comSum: this.state.comSum + 1
        }));
      }
     
    }

    onClickScissors() {
      this.setState(prevState => ({
        img: 2,
        img2: Random()
      }));

      if(this.state.img2 === 1){
        this.setState(prevState => ({
          youSum: this.state.youSum + 1
        }));
      } else if(this.state.img2 === 3){
        this.setState(prevState => ({
          comSum: this.state.comSum + 1
        }));
      }

    }

    onClickPaper() {
      this.setState(prevState => ({
        img: 3,
        img2: Random()
      }));
      
      if(this.state.img2 === 2){
        this.setState(prevState => ({
          youSum: this.state.youSum + 1
        }));
      } else if(this.state.img2 === 1){
        this.setState(prevState => ({
          comSum: this.state.comSum + 1
        }));
      }
      
    }

    render() {
      return (
        <div className="App">
        <div className="lay1">
          <div className="youCoinLay">
            <div className="youCoin">{this.state.youSum}</div>
          </div>
          <div className="comCoinLay">
            <div className="comCoin">{this.state.comSum}</div>
          </div>
        </div>
        <div className="lay2">
          <div className="you">YOU</div>
        {this.state.img === 1? 
          <div className="rock">
              <img src={rock} alt="rock" className="rockImg" />
          </div> : null }
        {this.state.img === 2?
          <div className="scissors">
              <img src={scissors} alt="scissors" className="sciImg" />
          </div> : null }
        {this.state.img === 3?
          <div className="paper">
            <img src={paper} alt="paper" className="paImg" />
          </div> : null }
        </div>
        <div className="lay3">
          <div className="com">COM</div>
        {this.state.img2 === 1? 
          <div className="rock">
              <img src={rock} alt="rock" className="rockImg" />
          </div> : null }
        {this.state.img2 === 2?
          <div className="scissors">
              <img src={scissors} alt="scissors" className="sciImg" />
          </div> : null }
        {this.state.img2 === 3?
          <div className="paper">
            <img src={paper} alt="paper" className="paImg" />
          </div> : null }
        </div>
        <div className="lay4">
          <div className="rock-area">
            <img className="rock-size" id="rock" src={rock} alt="rock" onClick={this.onClickRock}/>
          </div>
          <div className="scissors-area">
            <img className="scissors-size" id="scissors" src={scissors} alt="scissors" onClick={this.onClickScissors} />
          </div>
          <div className="paper-area">
            <img className="paper-size" id="paper" src={paper} alt="paper" onClick={this.onClickPaper} />
          </div>
        </div>
      </div>
      );
    }
  }
  export default Choice2;