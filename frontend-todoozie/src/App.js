import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container >
      <Header as="h3">This example is powered by Semantic UI React</Header>
      <List bulleted>
        <List.item 
          as="a"
          content="Official documentation"
          href="https://react.semantic-ui.com/"
          target="_blank"
        />
      </List>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Container>
  );
}

export default App;
