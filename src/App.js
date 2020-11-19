import { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Derping', age: 23 },
      { name: 'Derper', age: 69 },
      { name: 'Derpadette', age: 420 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Derper', age: 69 },
        { name: 'Derpadette', age: 20 }
      ]
    });
  }

  render() {
    const {persons} = this.state;
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          onClick={() => this.switchNameHandler('Derpinggg')} >
          Switch Name
        </button>
        <Person
          name={persons[0].name}
          age={persons[0].age}
        />
        <Person
          name={persons[1].name}
          age={persons[1].age}
          click={this.switchNameHandler.bind(this, 'Derpingg')}>
            My hobbies: eating
        </Person>
        <Person
          name={persons[2].name}
          age={persons[2].age}
        />
      </div>
    );
  }
}

export default App;
