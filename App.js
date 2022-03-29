import './App.css';
import React from 'react';
class App extends React.Component {
  state = {
    name: "circle"
  }
  startRotation = () => {

    this.setState(
      {
        name: "circle start-rotate"
      });
    
    const  min = 1;
    const  max = 10;
    const rand = Math.floor(Math.random() * (max - min + 1) ) + min;

    console.log('stopping in ' + rand + ' seconds.')

    setTimeout(() => {
      this.setState(
        {
          name: "circle"
        });
    }, rand * 1000);
  }

  render() {
    return (
      <div>
        <div className="arrow"> </div>
        <ul className={this.state.name}>
          <li>
            <div className='text' contentedtable="true"
              spellCheck="false"> 1 </div>
          </li>
          <li>
            <div className="text"
              contentedtable="true" spellCheck="false"
            /> 2 <div />
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 3 <div />
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 4 <div />
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 5 <div />
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 6 <div />
          </li>
          <li>
            <div className="text" contentedtable="true"
              spellCheck="false">
              7</div>
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 8 <div />
          </li>
          <li>
            <div className="text"
              contentedtable="true"
              spellCheck="false" /> 9 <div />
          </li>
        </ul>
        <button className="spin-button" onClick={this.startRotation}> SPIN</button>
      </div>
    );
  }
}
export default App;
