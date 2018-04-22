import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import ChatPage from './components/ChatPage';

class App extends Component {
  render() {
    return <ChatPage />;
  }
}

export default hot(module)(App);
