class Task < ApplicationRecord
  include Wisper::Publisher

  belongs_to :user, foreign_key: :user_id
  belongs_to :performer, class_name: 'User', foreign_key: :performer_id

  enum state: { opened: 0, done: 1 }

  validates :description, presence: true

  after_commit :notify_create, on: :create
  after_commit :notify_update, on: :update
  after_commit :notify_destroy, on: :destroy

  protected

  def notify_create
    broadcast(:on_create, self)
  end

  def notify_update
    broadcast(:on_update, self)
  end

  def notify_destroy
    broadcast(:on_destroy, self)
  end
end
