require 'rails_helper'

describe TaskChangeListener do
  describe 'on_create' do
    it 'broadcasts CREATE_TASK event to owner and performer' do
      listener = TaskChangeListener.new
      task = create(:task)
      payload = {a: 'b'}
      data = {payload: payload, type: 'CREATE_TASK'}
      stub_payload_render(payload.to_json)
      allow(UserChannel).to receive(:broadcast_to)

      listener.on_create(task)

      expect(UserChannel).to have_received(:broadcast_to).with(task.user_id, data.to_json)
      expect(UserChannel).to have_received(:broadcast_to).with(task.performer_id, data.to_json)
    end
  end

  def stub_payload_render(payload)
    allow(ApplicationController).to receive(:render).and_return(payload)
  end
end
