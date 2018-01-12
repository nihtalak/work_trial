import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions'
import { saveCredentials } from '../utils'

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.ui.loading,
    errors: auth.ui.errors,
    saveCredentials
  }
}

export default connect(mapStateToProps, {handleSubmit: login})(LoginForm)
