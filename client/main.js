import React from 'react';
import ReactDOM from 'react-dom';
import DummyArticle from './components/article';

const felev = [
    {id: 1, topic: 'Introduction'},
    {id: 2, topic: 'How to use the interface'},
    {id: 3, topic: 'git gud'}
   ];

const fulln = 0;

const App = () => {
  console.log('App const kicks in');

  return(
    <div>
      <DummyArticle felev={felev} fulln={fulln} />
    </div>
  );
};

Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.container'));
});
