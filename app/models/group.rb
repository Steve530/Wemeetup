class Group < ApplicationRecord
    validates :group_name, length: { minimum: 3 }

end
