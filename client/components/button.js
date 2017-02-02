//imports
import React from 'react';
//dummy data


//create/export component
export default class ElevioHelpButtonComponent extends React.Component {





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
        
      </div>
    );
  }
}
