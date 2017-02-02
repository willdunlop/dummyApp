//imports
import React from 'react';
//dummy data


//create/export component
export default class ElevioHelpButtonComponent extends React.Component {


  dummyShuf(){
    const n = Math.random() * (2.49 - 0) + 0;
    this.setState({fulln: Math.round(n)});
    console.log(this.state.fulln);
  }


  whenClicked(){
    if (this.props) {
      //_ELEV.id(this.props.id);
      console.log('this works now kek')
      console.log('felev' + this.props.felev);
    } else {
      console.log('_elev is not attached to window, help is unavailable');
    }
  }
  render(){
    return(
      <div>
        <button className="btn btn-primary"  onClick={this.whenClicked.bind(this)} >
          Help?
        </button>
        <button className="btn btn-default" onClick={this.dummyShuf}>Shuffle</button>
      </div>
    );
  }
}
