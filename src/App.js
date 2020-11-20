import { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'dfssddafd2', name: 'Derping', age: 23 },
      { id: 'dfsafdg4f2', name: 'Derper', age: 69 },
      { id: 'dfsafs34d2', name: 'Derpadette', age: 420 }
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

  nameChangedHandler = (event, id) => {
    const {persons} = this.state
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    // const person = Object.assign({}, persons[personIndex])
    const person = {...persons[personIndex]};
    person.name = event.target.value;
    const nameChangePersons = [...persons];
    nameChangePersons[personIndex] = person;
    this.setState({ persons: nameChangePersons });
  }

  togglePersonsHandler = () => {
    const {showPersons} = this.state;
    this.setState({showPersons: !showPersons});
  }

  render() {
    const {persons, showPersons} = this.state;
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let renderPersons = null;

    if (showPersons) {
      renderPersons = (
        <div>
          {persons.map((person, index) => {
            return <Person
              click={() => this.removePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    // red and bold are set in App.css (globals)
    const classes = [];
    if(persons.length <= 2) {
      classes.push('red');
    }
    if(persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
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
