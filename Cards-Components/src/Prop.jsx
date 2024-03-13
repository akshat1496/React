
import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className='Student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired, // Name prop is required and should be a string
  age: PropTypes.number.isRequired, // Age prop is required and should be a number
  isStudent: PropTypes.bool.isRequired, // isStudent prop is required and should be a boolean
};
Student.defaultProps={
    name: "Username",
    age:0,
    isStudent: false
};

export default Student;
