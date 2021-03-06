import { useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const {
    title, personsLength, showPersons, toggle,
  } = props;
  const authContext = useContext(AuthContext);
  let buttonClasses = '';

  if (showPersons) {
    buttonClasses = classes.Red;
  }

  // red and bold are set in App.css (globals)
  const assignedClasses = [];
  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        type="button"
        className={buttonClasses}
        onClick={toggle}
      >
        Toggle Persons
      </button>
      <button
        type="button"
        onClick={authContext.login}
      >
        Log in
      </button>
    </div>
  );
};

export default Cockpit;
