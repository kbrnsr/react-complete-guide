import WithClass from '../../../hoc/WithClass';
import classes from  './Person.module.css'

const Person = (props) => {
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </WithClass>
  );
};

export default Person;
