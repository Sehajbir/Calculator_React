import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Button from './Components/button';
import Input from './Components/input';
import SplButton from './Components/splbutton';
import * as math from "mathjs";
import './App.css';


class App extends React.Component{

  calculate(){
    console.log("calc")
  }

  render() {
    return (
      <body>
        <div className = {`calc-wrapper`}>
        <Header/>
        <Body/>
        <Footer/>
        </div>
      </body>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
      <div style = {{marginBottom : 40, marginTop : 25,}}>
       
      </div>
    )
  }
}

class Body extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      input : ""
    }
  };

  handleAC = val => {
    this.setState({input : ""})
  }

  addtoinput = val =>{
    (val === 'x') ?  this.setState({input: this.state.input + '*'}) : this.setState({input : this.state.input + val });
  }

  equate = val => {
    console.log(math.simplify(this.state.input));
    this.setState({input: math.simplify(this.state.input).value})
  }

  handleC = val => {
    var p = this.state.input;
    try{
    p = p.slice(0, -1);
    this.setState({input: p})
    }
    catch(Exception){
      this.setState({input : ""})
    }
  }

  handleSign = val => {
    var p = this.state.input;
    if(p[0] === '-')
      this.setState({input : this.state.input.slice(1)})
    else
      this.setState({input: '-' + this.state.input})
  }
  render() {
    return (
      <div>
        <Input input= {this.state.input}></Input>
        <div className = {`row`}>
          <Button handle = {this.addtoinput}>/</Button>
          <Button handle = {this.addtoinput}>x</Button>
          <Button handle = {this.addtoinput}>-</Button>
          <Button handle = {this.addtoinput}>+</Button>
        </div>
        <div className = {`row`}>
          <Button handle = {this.addtoinput}>7</Button>
          <Button handle = {this.addtoinput}>8</Button>
          <Button handle = {this.addtoinput}>9</Button>
          <Button handle = {this.handleC}>C</Button>
        </div>
        <div className = {`row`}>
          <Button handle = {this.addtoinput}>4</Button>
          <Button handle = {this.addtoinput}>5</Button>
          <Button handle = {this.addtoinput}>6</Button>
          <Button handle = {this.handleAC}>AC</Button>
        </div>
        <div className = {`row`}>
          <Button handle = {this.addtoinput}>1</Button>
          <Button handle = {this.addtoinput}>2</Button>
          <Button handle = {this.addtoinput}>3</Button>
          <Button handle = {this.addtoinput}>%</Button>
        </div>
        <div className = {`row`}>
          <Button handle = {this.addtoinput}>0</Button>
          <SplButton handle = {this.handleSign}>+/-</SplButton>
          <SplButton handle = {this.addtoinput}>.</SplButton>
          <Button handle = {() => this.equate()}>=</Button>
        </div>
        <KeyboardEventHandler handleKeys = {['1','2','3','4','5','6','7','8','9','0','-','+','/','*','.']} onKeyEvent = {(key, e) => this.addtoinput(key)} ></KeyboardEventHandler>
        <KeyboardEventHandler handleKeys = {['enter']} onKeyEvent = {() => this.equate()}></KeyboardEventHandler>
        <KeyboardEventHandler handleKeys = {['backspace']} onKeyEvent = {() => this.handleC()} ></KeyboardEventHandler>
        <KeyboardEventHandler handleKeys = {['esc']} onKeyEvent = {() => this.handleAC()}></KeyboardEventHandler>
      </div>
    )
  }
}

class Footer extends React.Component{
  render() {
    return (
      <div style = {{marginBottom: 40}}>

      </div>
    )
  }
}
export default App;
