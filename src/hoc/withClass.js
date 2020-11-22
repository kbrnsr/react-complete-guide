/* eslint-disable react/jsx-props-no-spreading */
const withClass = (WrappedComponent, className) => ((props) => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
));

export default withClass;
