class Group < ApplicationRecord
    validates :group_name, length: { minimum: 3 }
    validates  :description, presence: true
    # validates :organizer_id


    belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: 'User'

    has_many :memberships
    
    has_many :members,
    through: :memberships,
    source: :user

end
