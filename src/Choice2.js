import React from 'react';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';
import './Choice.css';

class Choice2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {img: 0};
      this.onClickRock = this.onClickRock.bind(this);
      this.onClickPaper = this.onClickPaper.bind(this);
      this.onClickScissors = this.onClickScissors.bind(this);
    }
  
    onClickRock() {
      this.setState(prevState => ({
        img: 1
      }));
      console.log(this.state.img);
    }

    onClickScissors() {
      this.setState(prevState => ({
        img: 2
      }));
      console.log(this.state.img);
    }

    onClickPaper() {
      this.setState(prevState => ({
        img: 3
      }));
      console.log(this.state.img);
    }
  
    render() {
      return (
        <div className="App">
        <div className="lay1"></div>
        <div className="lay2">
        {this.state.img === 1? 
          <div className="rock">
              <img src={rock} alt="rock" className="roImg" />
          </div> : null }
        {this.state.img === 2?
          <div className="scissors">
              <img src={scissors} alt="scissors" className="scImg" />
          </div> : null }
        {this.state.img === 3?
          <div className="paper">
            <img src={paper} alt="paper" className="paImg" />
          </div> : null }
        </div>
          {/* //   if (this.state.img === 1) return (
          //   <div className="rock">
          //     <img src={rock} alt="rock" className="roImg" />
          //   </div>
          //   );
          //   else if (this.state.img === 2)return (
          //   <div className="scissors">
          //     <img src={scissors} alt="scissors" className="scImg" />
          //   </div>
          //   );
          //   else if (this.state.img === 3)return (
          //   <div className="paper">
          //     <img src={paper} alt="paper" className="paImg" />
          //   </div>
          //   );
          // })() */}
        <div className="lay3"></div>
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