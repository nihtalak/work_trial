import React from 'react'
import { connect } from 'react-redux'
import TaskModal from '../../tasklist/containers/TaskModal'

const MODAL_COMPONENTS = {
  SHOW_TASK: TaskModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null
  }

  const Element = MODAL_COMPONENTS[modalType]
  return <Element {...modalProps} />
}

const mapStateToProps = (state) => {
  return state.modal
}

export default connect(mapStateToProps)(ModalRoot)
