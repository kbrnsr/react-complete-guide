import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from  './Person.module.css';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {
  const {click, name, age, children, changed} = props
  return (
    <Aux>
      <AuthContext.Consumer>
        { (context) => 
            context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
        }
      </AuthContext.Consumer>
      <p onClick={click}>I'm {name} and I am {age} years old!</p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />      
    </Aux>
  );
};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
