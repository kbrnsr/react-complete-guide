import { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'

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
    let buttonClasses = '';
    let renderPersons = null;

    if (showPersons) {
      renderPersons = (
        <div>
          <Persons
            persons={persons}
            clicked={this.removePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      buttonClasses = classes.Red;
    }

    // red and bold are set in App.css (globals)
    const assignedClasses = [];
    if(persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={buttonClasses}
          onClick={this.togglePersonsHandler} >
          Toggle Persons
        </button>
        {renderPersons}
      </div>
    );
  }
}

export default App;
