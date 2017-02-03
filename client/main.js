import React from 'react';
import ReactDOM from 'react-dom';
import DummyArticle from './components/article';

const ARTICLES = [
  'Introduction',
  'How to use the interface',
  'Other',
  'Your account settings',
  'Home Page',
  'Login'
];

const elevioArticleId = 0;

  const articalRetrieval = function(id) {
       return {
         openArticle: function(id){
           return ARTICLES[id]
         }
       }
    }
    //"openArticle can be reached"
const _elev = articalRetrieval(elevioArticleId)


const App = () => {
  console.log('App const kicks in');

  return(
    <div>
      <DummyArticle _elev={_elev} elevioArticleId={elevioArticleId} />
    </div>
  );
};

Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.container'));
});
