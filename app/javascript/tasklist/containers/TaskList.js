import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, destroyTask } from '../actions'
import TaskList from '../components/TaskList'
import { showModal, hideModal } from '../../modal/actions'

class TaskListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render () {
    const { loading, tasks, onDelete, onShow } = this.props

    if (loading) {
      return <div className="loader center-block" />
    } else {
      return <TaskList tasks={tasks} onDelete={onDelete} onShow={onShow} />
    }
  }
}

const mapStateToProps = ({ tasklist }) => {
  return {
    loading: tasklist.loading,
    tasks: tasklist.ids.map((id) => tasklist.byId[id])
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    onShow: (task) => dispatchProps.showModal('SHOW_TASK', {
      task: task
    })
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  onDelete: destroyTask,
  showModal
}, mergeProps)(TaskListContainer)
