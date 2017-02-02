//imports
import React from 'react';

//This component is now recieving data for elevioArticleId's state

//create/export component
export default class ElevioHelpButtonComponent extends React.Component {

  whenClicked(){
    if (this.props) {
      //_ELEV.id(this.props.id);
      console.log("Help item = " + this.props.elevioFunction.openArticle(this.props.elevioArticleId))
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
