members = []

member_avatars = []

group.members.each do |member|
  members.push(member.id)

end 


json.extract! group, :id, :group_name,:organizer,:picture_url,:description,
  :created_at, :updated_at

json.membersarray members.length

json.members members