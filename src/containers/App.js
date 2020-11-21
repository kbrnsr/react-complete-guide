import { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

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
    const {appTitle} = this.props;
    let renderPersons = null;

    if (showPersons) {
      renderPersons = (
        <Persons
          persons={persons}
          clicked={this.removePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit
          title={appTitle} 
          showPersons={showPersons}
          personsLength={persons.length}
          toggle={this.togglePersonsHandler} />
        {renderPersons}
      </WithClass>
    );
  }
}

export default App;
