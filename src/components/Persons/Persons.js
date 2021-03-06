import Person from './Person/Person';

const Persons = (props) => (
  props.persons.map((person, index) => (
    <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => props.changed(event, person.id)}
    />
  ))
);

export default Persons;
