import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          <p>{this.props.label}</p>

          {this.props.name === "name" ? (
            <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder={`name`}
              onChange={this.handleInputChange}
            />
          ) : (
            <input
              name="id"
              type="number"
              value={this.state.id}
              placeholder={`ID`}
              onChange={this.handleInputChange}
            />
          )}
        </label>
        <input
          className="input-button"
          type="button"
          value="submit"
          onClick={() => {
            this.props.name === "name"
              ? this.props.onClick(this.state.name)
              : this.props.onClick(this.state.id);
          }}
        />
      </form>
    );
  }
}

export default Form;
