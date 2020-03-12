class AddextratoGroupTable < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :description, :text
    add_column :groups, :picture_url, :string
  end
end
