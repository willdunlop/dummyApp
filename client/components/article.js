import React from 'react';
import ReactDOM from 'react-dom';
import ElevioHelpButtonComponent from './button.js';

console.log('dummyArticle kicks in');

export default class DummyArticle extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return(
      <div>
        <div className="media list-group-item">{/*this.props.felev[this.props.fulln].topic*/this.props}
        </div>
        <ElevioHelpButtonComponent felev={this.props.felev} fulln={this.props.fulln} />
      </div>
    );
  };
}
