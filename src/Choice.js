import React, { Fragment } from 'react';
import rock from './rock.jpg';
import scissors from './scissors.jpg';
import paper from './paper.jpg';

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  // useEffect(() => {
  //   console.log('effect');
  //   console.log(name);
  //   return () => {
  //     console.log('cleanup');
  //     console.log(name);
  //   };
  // });

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = e => {
  //   setNickname(e.target.value);
  // };

  return (
    <Fragment>
    <div className="App">
              <div className="lay1"></div>
              <div className="lay2">
                {/* <div className="rock"><img src={rock} className="rockImg"></img></div>
                <div className="scissors"><img src={scissors} className="sciImg"></img></div> */}
                <div className="paper"><img src={ paper } className="paImg"></img></div>
              </div>
              <div className="lay3"></div>
              <div className="lay4">
                <div className="rock-area"><img className="rock-size" id="rock" src = { rock } onClick={this.imgClick}></img></div>
                <div className="scissors-area"><img className="scissors-size" id="scissors" src = { scissors } onClick={this.imgClick}></img></div>
                <div className="paper-area"><img className="paper-size" id="paper" src= { paper } onClick={this.imgClick}></img></div>
              </div>
        </div>
    </Fragment>
  );
};

export default Info;