import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const {title, personsLength, showPersons, toggle} = props
  let buttonClasses = '';

  if (showPersons) {
    buttonClasses = classes.Red;
  }

  // red and bold are set in App.css (globals)
  const assignedClasses = [];
  if(personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if(personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
    <h1>{title}</h1>
    <p className={assignedClasses.join(' ')}>This is really working</p>
    <button
      className={buttonClasses}
      onClick={toggle} >
      Toggle Persons
    </button>
    </div>
  );
};

export default Cockpit;
