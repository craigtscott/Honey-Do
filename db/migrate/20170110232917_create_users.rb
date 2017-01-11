class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :user_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false


      t.timestamps null: false
    end
    add_index :users, :last_name
    add_index :users, :user_name, unique: true
    add_index :users, :session_token, unique: true
  end
end
