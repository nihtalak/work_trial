import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, destroyTask, taskEvent } from '../actions'
import TaskList from '../components/TaskList'
import { showModal, hideModal } from '../../modal/actions'
import ActionCable from 'actioncable'

class TaskListContainer extends React.Component {
  componentDidMount() {
    const headers = this.props.headers
    const endpoint = `/cable?access-token=${headers['access-token']}&uid=${headers.uid}&client=${headers.client}`
    const cable = ActionCable.createConsumer(endpoint)
    const channelIdentifier = {channel: 'UserChannel'}
    this.ws = cable.subscriptions.create(channelIdentifier, {
      received: (e) => this.props.onTaskEventReceive(JSON.parse(e))
    })
    this.props.fetchTasks()
  }

  componentWillUnmount() {
    this.ws.unsubscribe()
  }

  render () {
    const { loading, tasks, onDelete, onShow, onAdd } = this.props

    if (loading) {
      return <div className="loader center-block" />
    } else {
      return <TaskList tasks={tasks} onDelete={onDelete} onShow={onShow} onAdd={onAdd} />
    }
  }
}

const mapStateToProps = ({ auth, tasklist }) => {
  return {
    user: auth.attributes,
    headers: auth.authHeaders,
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
    }),
    onAdd: (task) => dispatchProps.showModal('CREATE_TASK')
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  onDelete: destroyTask,
  showModal,
  onTaskEventReceive: taskEvent
}, mergeProps)(TaskListContainer)
