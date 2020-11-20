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
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Derpavaganza', age: 23 },
        { name: 'Derper', age: 69 },
        { name: 'Derpadette', age: 20 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Derpavaganza', age: 23 },
        { name: event.target.value, age: 69 },
        { name: 'Derpadette', age: 20 }
      ]
    });
  }
  togglePersonsHandler = () => {
    const {showPersons} = this.state;
    this.setState({showPersons: !showPersons});
  }

  render() {
    const {persons, showPersons} = this.state;
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let renderPersons = null;

    if (showPersons) {
      renderPersons = (
        <div>
          <Person
            name={persons[0].name}
            age={persons[0].age}
          />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            click={this.switchNameHandler.bind(this, 'Derpingg')}
            changed={this.nameChangedHandler}>
              My hobbies: eating
          </Person>
          <Person
            name={persons[2].name}
            age={persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={styles}
          onClick={this.togglePersonsHandler} >
          Toggle Persons
        </button>
        {renderPersons}
      </div>
    );
  }
}

export default App;
