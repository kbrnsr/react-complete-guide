import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from  './Person.module.css'

const Person = (props) => {
  const {click, name, age, children, changed} = props
  return (
    <Aux>
      <p onClick={click}>I'm {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </Aux>
  );
};

export default withClass(Person, classes.Person);
