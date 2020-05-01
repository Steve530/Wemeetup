members = []
members_names = []

member_avatars = []

group.members.each do |member|
  members.push(member.id)

end 

group.members.each do |member|
  members_names.push(member.username)

end 


json.extract! group, :id, :group_name,:organizer,:picture_url,:description,
  :created_at, :updated_at

json.membersarray members.length

json.members members
json.members_names members_names