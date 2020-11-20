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

  removePersonHandler = (personIndex) => {
    // Can also use splice directly
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
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
          {persons.map((person, index) => {
            return <Person
              click={() => this.removePersonHandler(index)} 
              name={person.name}
              age={person.age} />
          })}
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
