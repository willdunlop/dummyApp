import React from 'react';
import ReactDOM from 'react-dom';
import DummyArticle from './components/article';

const ARTICLES = [
  'Introduction',
  'How to use the interface',
  'git gud',
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
const elevioFunction = articalRetrieval(elevioArticleId)


const App = () => {
  console.log('App const kicks in');

  return(
    <div>
      <DummyArticle elevioFunction={elevioFunction} elevioArticleId={elevioArticleId} />
    </div>
  );
};

Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.container'));
});
