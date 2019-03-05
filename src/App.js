import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
