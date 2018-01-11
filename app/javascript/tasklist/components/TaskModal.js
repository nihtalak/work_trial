import React from 'react'
import PT from 'prop-types'
import { Button, Modal, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'
import Spinner from '../../global/Spinner'


class TaskModal extends React.Component {
  constructor(props) {
    super()
    this.state = {description: props.task.description, performer_id: props.task.performer.id}
  }

  handleChange = (field) => (e) => this.setState({[field]: e.target.value})

  render () {
    const { task, users, loadingUsers, onClose, onConfirm } = this.props
    const { description, performer_id } = this.state

    return (
      <Modal onHide={onClose} show>
        <Modal.Header closeButton>
          <Modal.Title>Task #{task.id}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form horizontal onSubmit={(e) => {e.preventDefault(); onConfirm(this.state).then(onClose)}}>
            <FormGroup controlId="description">
              <Col componentClass={ControlLabel} sm={3}>
                <span className="pull-right">Description</span>
              </Col>
              <Col sm={9}>
                <FormControl componentClass="textarea" placeholder="Description" value={description} onChange={this.handleChange('description')} required />
              </Col>
            </FormGroup>
            <FormGroup controlId="performer">
              <Col componentClass={ControlLabel} sm={3}>
                <span className="pull-right">Performer</span>
              </Col>
              <Col sm={9}>
                {loadingUsers
                  ? <Spinner />
                  : <FormControl componentClass="select" value={performer_id} onChange={this.handleChange('performer_id')} required>
                      {users.map((user) => (
                      <option value={user.id} key={user.id}>{user.name}</option>
                      ))}
                    </FormControl>
                }
              </Col>
            </FormGroup>
            <FormGroup controlId="owner">
              <Col componentClass="label" sm={3}>
                <span className="pull-right">Owner</span>
              </Col>
              <Col sm={9}>
                {task.owner.name}
              </Col>
            </FormGroup>
            <FormGroup controlId="state">
              <Col componentClass="label" sm={3}>
                <span className="pull-right">State</span>
              </Col>
              <Col sm={9}>
                {task.state}
              </Col>
            </FormGroup>
            <FormGroup controlId="createdAt">
              <Col componentClass="label" sm={3}>
                <span className="pull-right">Created at</span>
              </Col>
              <Col sm={9}>
                {new Date(task.createdAt).toLocaleString()}
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
          <Button bsStyle="primary" type="submit" onClick={() => onConfirm(task.id, this.state).then(onClose)} disabled={!description || !performer_id}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

TaskModal.propTypes = {
  loadingUsers: PT.bool.isRequired,
  task: PT.shape({
    id: PT.number.isRequired,
    description: PT.string.isRequired,
    owner: PT.shape({
      id: PT.number.isRequired,
      name: PT.string.isRequired
    }).isRequired,
    performer: PT.shape({
      id: PT.number.isRequired,
      name: PT.string.isRequired
    }).isRequired,
    state: PT.string.isRequired,
    createdAt: PT.string.isRequired
  }).isRequired,
  users: PT.arrayOf(PT.shape({
    id: PT.number.isRequired,
    name: PT.string.isRequired
  })),
  onClose: PT.func.isRequired,
  onConfirm: PT.func.isRequired
}

export default TaskModal
