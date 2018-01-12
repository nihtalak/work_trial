import React from 'react'
import { connect } from 'react-redux'
import TaskCreateModal from '../components/TaskCreateModal'
import { createTask } from '../actions'
import { hideModal } from '../../modal/actions'
import { fetchUsers } from '../../users/actions'

class TaskCreateModalContainer extends React.Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return <TaskCreateModal {...this.props} {...this.state} />
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
  onConfirm: createTask,
  fetchUsers
})(TaskCreateModalContainer)
