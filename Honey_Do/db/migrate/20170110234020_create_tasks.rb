class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :list_id, null: false
      t.boolean :done, default: false

      t.timestamps null: false
    end
    add_index :tasks, :list_id
  end
end
