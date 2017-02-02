import React from 'react';
import ReactDOM from 'react-dom';
import ElevioHelpButtonComponent from './button.js';

console.log('dummyArticle kicks in');


export default class DummyArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fulln:  0};
  }

  dummyShuf(){
    const fulln = 0;
    const n = Math.random() * (2.49 - 0) + 0;
    this.setState({fulln: Math.round(n)});
    console.log(this.state.fulln);
  }

  render(){
    return(
      <div>
        <div className="media list-group-item">{this.props.felev[this.state.fulln].topic}
        <button className="btn btn-default" onClick={this.dummyShuf.bind(this)}>Shuffle</button>
        </div>
        <ElevioHelpButtonComponent felev={this.props.felev} />
      </div>
    );
  };
}
