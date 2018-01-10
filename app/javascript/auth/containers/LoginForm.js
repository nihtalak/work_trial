import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions'

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.ui.loading,
    errors: auth.ui.errors
  }
}

export default connect(mapStateToProps, {handleSubmit: login})(LoginForm)
