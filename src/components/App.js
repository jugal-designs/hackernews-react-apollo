import React from 'react'
import logo from '../logo.svg'
import '../styles/App.css'

import LinkList from './LinkList'

export default () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React Demo</h1>
    </header>
    <LinkList />
  </div>
)

