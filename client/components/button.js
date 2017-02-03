//imports
import React from 'react';

//This component is now recieving data for elevioArticleId's state

//create/export component
export default class ElevioHelpButtonComponent extends React.Component {

  whenClicked(){
    if (this.props._elev) {
      //_ELEV.id(this.props.id);
       this.props._elev.openArticle(this.props.elevioArticleId)
    } else {
      
      throw new Error('_elev is not attached to window, help is unavailable');
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
