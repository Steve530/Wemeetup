class AddAutheridToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :organizer_id, :integer
    add_index :groups, :organizer_id
  end
    
end
