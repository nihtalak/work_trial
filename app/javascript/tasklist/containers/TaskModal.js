import React from 'react'
import { connect } from 'react-redux'
import TaskModal from '../components/TaskModal'
import { updateTask } from '../actions'
import { hideModal } from '../../modal/actions'
import { fetchUsers } from '../../users/actions'

class TaskModalContainer extends React.Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return <TaskModal {...this.props} {...this.state} />
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loadingUsers: users.loading,
    users: users.entities
  }
}

export default connect(mapStateToProps, {
  onClose: hideModal,
  onConfirm: updateTask,
  fetchUsers
})(TaskModalContainer)
