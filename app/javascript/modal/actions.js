export const showModal = (type, props) => ({
  type: 'SHOW_MODAL',
  modalType: type,
  modalProps: props
})

export const hideModal = () => ({
  type: 'HIDE_MODAL'
})
