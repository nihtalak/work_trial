class Task < ApplicationRecord
  belongs_to :user, foreign_key: :user_id
  belongs_to :performer, class_name: 'User', foreign_key: :performer_id

  enum state: { opened: 0, done: 1 }

  validates :description, presence: true
end
