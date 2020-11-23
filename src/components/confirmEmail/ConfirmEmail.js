import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';


class ConfirmEmail extends Component {
  state = {
    emailAddress: '',
    loading: false,
  }

  handleChange = (property, event) => {
    console.log('in handleChange with my property', property);
    console.log('in handleChange with my event', event.target.value);
    this.setState({
      [property]: event.target.value,
    });

  }

  handleSubmit = (event) => {
    console.log('in handleSubmit with this.state.emailAddress', this.state.emailAddress);
    event.preventDefault();
    this.setState({
      loading: true,
    });

    this.props.dispatch({
      type: 'SEND_CONFIRM',
      url: '/email-confirm',
      payload: this.state
    });
  }

  render() {
    const { emailAddress, loading } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>in Header</p>
        </header>
        <section>
          <form onSubmit={this.handleSubmit} className="password-reset" action="">
            <h5>Forgot your password? Reset it below</h5>
            <label htmlFor="email-input">Email address:</label>
            <input
              type="email"
              onChange={(event) => this.handleChange('emailAddress', event)}
              placeholder="name@example.com"
              name="email"
            />
            <button type="submit">Email me a recovery link</button>
          </form>
        </section>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(ConfirmEmail);