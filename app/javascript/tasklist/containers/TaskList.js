import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, destroyTask } from '../actions'
import TaskList from '../components/TaskList'

class TaskListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render () {
    const { loading, tasks, onDelete } = this.props

    if (loading) {
      return <div className="loader center-block" />
    } else {
      return <TaskList tasks={tasks} onDelete={onDelete} />
    }
  }
}

const mapStateToProps = ({ tasklist }) => {
  return {
    loading: tasklist.loading,
    tasks: tasklist.ids.map((id) => tasklist.byId[id])
  }
}

export default connect(mapStateToProps, {fetchTasks, onDelete: destroyTask})(TaskListContainer)
