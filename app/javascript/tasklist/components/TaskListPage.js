import React from 'react'
import LogoutButton from '../../auth/containers/LogoutButton'
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import TaskList from '../containers/TaskList'

const TaskListPage = () => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>Work Trial</Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LogoutButton />
      </Nav>
    </Navbar>
    <div className="text-center">
      <Grid>
        <Row>
          <Col>
            <h2>Things to do</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={10} xsOffset={2} mdOffset={1}>
            <TaskList />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default TaskListPage
