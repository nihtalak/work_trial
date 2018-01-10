import React from 'react'
import PT from 'prop-types'
import { Button, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap'

class LoginForm extends React.Component {
  state = {email: '', password: ''}

  onChange = (field) =>
    (e) => {
      this.setState({[field]: e.target.value})
    }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render () {
    const { email, password } = this.state
    const { loading, errors } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        {errors && errors.length &&
          <Alert bsStyle="danger">{errors.map((e) => <div>{e}</div>)}</Alert>
        }
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl autoFocus type="email" value={email} onChange={this.onChange('email')} />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" value={password} onChange={this.onChange('password')} />
        </FormGroup>
        <Button block bsSize="large" type="submit" disabled={loading}>Login</Button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  loading: PT.bool.isRequired,
  errors: PT.array,
  handleSubmit: PT.func.isRequired
}

export default LoginForm
