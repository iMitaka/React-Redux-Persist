import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as securityActions from '../../redux/security/security-action-creators'

class ValidateSecurityNumber extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: {},
      securityNumber: ''
    }
  }

  componentDidMount() {
    if (!this.props.security.securityNumber) {
      this.redirectToPage()
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.security.message) {
      this.setState({
        message: newProps.security.message
      })
    }
  }

  redirectToPage = () => {
    this.props.history.push('/')
  }

  validateSecurityNumber = () => {
    this.props.securityActions.validateSecurityNumber(this.state.securityNumber)
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (isNaN(target.value)) return

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            Enter PIN:
                     <input
              name="securityNumber"
              type="text"
              value={this.state.securityNumber || ''}
              onChange={this.handleInputChange} />
          </label>
          <button
            onClick={this.validateSecurityNumber}
          >Validate Security Number
                    </button>
        </div>
        <div
          style={{ color: this.state.message.type === 'error' ? 'red' : 'green' }}
        >{this.state.message.text}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    security: state.security
  }
}

function mapDispatchToProps(dispatch) {
  return {
    securityActions: bindActionCreators(securityActions, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ValidateSecurityNumber))
