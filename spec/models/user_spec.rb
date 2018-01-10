require 'rails_helper'

describe User do
  describe '#all_tasks' do
    it 'returns both tasks where user is an owner and where user is a performer' do
      user = create(:user)
      task1 = create(:task, user: user)
      task2 = create(:task, performer: user)
      create(:task)

      result = user.all_tasks

      expect(result).to match_array([task1, task2])
    end
  end
end
