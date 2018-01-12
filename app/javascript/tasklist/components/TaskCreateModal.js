import React from 'react'
import PT from 'prop-types'
import { Button, Modal, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'
import Spinner from '../../global/Spinner'


class TaskCreateModal extends React.Component {
  constructor(props) {
    super()
    this.state = {description: '', performer_id: "", state: ""}
  }

  handleChange = (field) => (e) => this.setState({[field]: e.target.value})

  render () {
    const { users, loadingUsers, onClose, onConfirm } = this.props
    const { state, description, performer_id } = this.state

    return (
      <Modal onHide={onClose} show>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
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
                      <option value="">Select a performer...</option>
                      {users.map((user) => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                      ))}
                    </FormControl>
                }
              </Col>
            </FormGroup>
            <FormGroup controlId="state">
              <Col componentClass={ControlLabel} sm={3}>
                <span className="pull-right">State</span>
              </Col>
              <Col sm={9}>
                <FormControl componentClass="select" value={state} onChange={this.handleChange('state')} required>
                  <option value="">Select task state...</option>
                  <option value="opened">Opened</option>
                  <option value="done">Done</option>
                </FormControl>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose}>Close</Button>
          <Button bsStyle="primary" type="submit" onClick={() => onConfirm(this.state).then(onClose)} disabled={!description || !performer_id || !state}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

TaskCreateModal.propTypes = {
  loadingUsers: PT.bool.isRequired,
  users: PT.arrayOf(PT.shape({
    id: PT.number.isRequired,
    name: PT.string.isRequired
  })),
  onClose: PT.func.isRequired,
  onConfirm: PT.func.isRequired
}

export default TaskCreateModal
