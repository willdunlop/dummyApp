import React from 'react';
import ReactDOM from 'react-dom';
import ElevioHelpButtonComponent from './button.js';

console.log('dummyArticle kicks in');


export default class DummyArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elevioArticleId:  0};
  }

  dummyShuf(){
    const n = Math.random() * (5.49 - 0) + 0;
    this.setState({elevioArticleId: Math.round(n)});
    //console.log(this.state.elevioArticleId);

  }

  render(){
    return(
      <div>
        <div className="media list-group-item">{this.props._elev.openArticle(this.state.elevioArticleId)}
        </div>
        <div className="btn-container">
          <button className="btn btn-default" onClick={this.dummyShuf.bind(this)}>Shuffle</button>
          <ElevioHelpButtonComponent _elev={this.props._elev} elevioArticleId={this.state.elevioArticleId} />
        </div>
      </div>
    );
  };
}
