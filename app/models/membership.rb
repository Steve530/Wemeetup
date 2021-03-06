class Membership < ApplicationRecord
    validates :user_id, :group_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    belongs_to :group,
    foreign_key: :group_id,
    class_name: 'Group'
end
