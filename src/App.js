import React, { Fragment } from 'react';
import Header from './components/header/Header'
import Stories from './components/storie/Stories'
import Main from './components/Main'
import './App.css';

function App() {
    return (
      <Fragment>
        <Header/>
        <Stories/>
        <Main/>
      </Fragment>
    );
}

export default App;
