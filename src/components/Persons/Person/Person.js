import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {
  const {
    click, name, age, children, changed,
  } = props;
  return (
    <Aux>
      <AuthContext.Consumer>
        { (context) => (context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>)}
      </AuthContext.Consumer>
      <button
        type="button"
        onClick={click}
      >
        I&apos;m
        {' '}
        {name}
        {' '}
        and I am
        {' '}
        {age}
        {' '}
        years old!
      </button>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </Aux>
  );
};
Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};

export default withClass(Person, classes.Person);
