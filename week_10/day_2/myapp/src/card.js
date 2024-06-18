import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="Card">
      <p>Name : {props.name}</p>
      <img
        alt="profile"
        src="https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg"
      />
      <p>IS Student : {props.ISStudent ? "Yes" : "No"}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  ISStudent: PropTypes.bool,
};

Card.defaultProp = {
  name: "guest",
  ISStudent: false,
};

export default Card;
