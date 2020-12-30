import React from 'react';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import './Choice.css';
import Random from './Random.js';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';



class Choice2 extends React.Component {
  youSum = 0;
  comSum = 0;

    constructor(props) {
      super(props);

      this.onClickRock = this.onClickRock.bind(this);
      this.onClickPaper = this.onClickPaper.bind(this);
      this.onClickScissors = this.onClickScissors.bind(this);
    }

    onClickRock = () => {
      this.img = 1;
      this.img2 = Random();

      if(this.img2 === 1){
        this.youSum++;
      } else if(this.img2 === 3){
        this.comSum++;
      }

      console.log("img : " + this.img);
      console.log("나 : " + this.youSum);
      console.log("컴 : " + this.comSum);

    };

    onClickScissors = () => {
      this.img = 2;
      this.img2 = Random();
    
      if(this.img2 === 1){
        this.youSum++;
      } else if(this.img2 === 3){
        this.comSum++;
      }

    };

    onClickPaper = () => {
      this.img = 3;
      this.img2 = Random();
      
      if(this.img2 === 2){
        this.youSum++;
      } else if(this.img2 === 1){
        this.comSum++;
      }
      
    }

    render() {
      
      return (
        <div className="App">
        <div className="lay1">
          <div className="youCoinLay">
            <div className="youCoin">{this.youSum}</div>
          </div>
          <div className="comCoinLay">
            <div className="comCoin">{this.comSum}</div>
          </div>
        </div>
        <div className="lay2">
          <div className="you">YOU</div>
        {this.img === 1? 
          <div className="rock">
              <img src={rock} alt="rock" className="rockImg" />
          </div> : null }
        {this.img === 2?
          <div className="scissors">
              <img src={scissors} alt="scissors" className="sciImg" />
          </div> : null }
        {this.img === 3?
          <div className="paper">
            <img src={paper} alt="paper" className="paImg" />
          </div> : null }
        </div>
        <div className="lay3">
          <div className="com">COM</div>
        {this.img2 === 1? 
          <div className="rock">
              <img src={rock} alt="rock" className="rockImg" />
          </div> : null }
        {this.img2 === 2?
          <div className="scissors">
              <img src={scissors} alt="scissors" className="sciImg" />
          </div> : null }
        {this.img2 === 3?
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

// decorate(Choice2, {
//   img: observable,
//   img2: observable,
//   youSum: observable,
//   comSum: observable

// })

  export default Choice2;