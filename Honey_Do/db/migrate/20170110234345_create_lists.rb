class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.integer :author_id, null: false
      t.string :title, null: false

      t.timestamps null: false
    end
    add_index :lists, :author_id
  end
end
