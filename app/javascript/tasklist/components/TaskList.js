import React from 'react'
import PT from 'prop-types'
import { Button } from 'react-bootstrap'

const dateFormatter = (cell, row) => new Date(cell).toLocaleString()


const TaskList = ({ tasks, onDelete }) => {
  const actionFormatter = (cell, row) => (
    <Button bsSize="xs" onClick={() => onDelete(row.id)}>Delete</Button>
  )

  return (
    <BootstrapTable data={tasks} striped hover className="tasks-list">
      <TableHeaderColumn dataField="id" isKey hidden dataAlign="center">Description</TableHeaderColumn>
      <TableHeaderColumn dataField="description" dataSort dataAlign="center">Description</TableHeaderColumn>
      <TableHeaderColumn className="col-md-2" columnClassName="col-md-2" dataField="owner" dataSort dataAlign="center">Owner</TableHeaderColumn>
      <TableHeaderColumn className="col-md-2" columnClassName="col-md-2" dataField="state" dataSort dataAlign="center">State</TableHeaderColumn>
      <TableHeaderColumn className="col-md-2" columnClassName="col-md-2" dataField="createdAt" dataSort dataFormat={dateFormatter} dataAlign="center">Created at</TableHeaderColumn>
      <TableHeaderColumn className="col-md-1" columnClassName="col-md-1" dataField="action" dataFormat={actionFormatter} dataAlign="center"></TableHeaderColumn>
    </BootstrapTable>
  )
}

TaskList.propTypes = {
  tasks: PT.arrayOf(PT.shape({
    id: PT.number.isRequired,
    description: PT.string.isRequired,
    owner: PT.string.isRequired,
    performer: PT.string.isRequired,
    state: PT.string.isRequired,
    createdAt: PT.string.isRequired
  })).isRequired,
  onDelete: PT.func.isRequired
}

export default TaskList
