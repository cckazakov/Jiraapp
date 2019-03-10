import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Topbar from './components/Topbar';
import Category from './components/Category';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Category />
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default App;
