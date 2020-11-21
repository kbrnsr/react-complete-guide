import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from  './Person.module.css'

const Person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

export default withClass(Person, classes.Person);
