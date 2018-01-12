class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :tasks

  def all_tasks
    tasks.or(Task.where(performer: self)).distinct
  end
end
