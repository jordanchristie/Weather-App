import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';





class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { location: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather();

    this.setState({ location: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
        placeholder="Enter a city"
        className="form-control"
        value={this.state.location}
        onChange={this.handleChange}
         />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)