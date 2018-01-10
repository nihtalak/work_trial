class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.references :user
      t.references :performer
      t.integer :state, null: false, default: 0

      t.timestamp :created_at
    end
  end
end
