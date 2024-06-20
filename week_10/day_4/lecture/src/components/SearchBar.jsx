import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { options: props.options };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  // Functionality: To console log the input value
  displayInput = (e) => {
    const searchedCars = this.state.options.filter(
      (car) => car.id == e.target.value
    );
    this.setState({
      idChosenCar: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <label>Search: </label>
        <select
          placeholder="Search..."
          aria-label="Search"
          onChange={this.displayInput}
        >
          {this.state.options.map((option, index) => {
            return (
              <option value={option.id} key={index}>
                {option.name}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}
