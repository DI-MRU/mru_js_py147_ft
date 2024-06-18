import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div className="student">
      <p>
        Student Name: {props.name} <br />
        Student Age: {props.age}
        <br />
        IsEnrolled: {props.isEnrolled ? "Yes" : "No"}
      </p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isEnrolled: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isEnrolled: false,
};
export default Student;
