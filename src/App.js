import { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );
    // return createElement('div', {className: 'App'}, createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
