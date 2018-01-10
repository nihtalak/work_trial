import { connect } from 'react-redux'
import LogoutButton from '../components/LogoutButton'
import { logout } from '../actions'
import { removeCredentials } from '../utils'

const mapStateToProps = () => {
  return {removeCredentials}
}

export default connect(mapStateToProps, {logout})(LogoutButton)
