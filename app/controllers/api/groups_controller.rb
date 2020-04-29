class Api::GroupsController < ApplicationController
  before_action :require_logged_in, only:[:create, :update]

  def index
    @groups = Group.all
  end

    def create
        # debugger
        @group = Group.new(group_params)
        @group.organizer_id = current_user.id

        if @group.save
            membership = Membership.new(user_id: current_user.id, group_id: @group.id);
            membership.save 
            render :show  
        else
            render json: @group.errors.full_messages, status: 422
        end
    end
    
    def show
        @group = Group.find(params[:id])
    end
    
    def update
        debugger
        @group = Group.find(params[:id])
        debugger
        if @group.update(group_params) && (@group.organizer.id === current_user.id) 
            render :show 
        else
            render json: @group.errors.full_messages, status: 422
        end
      
    end

    def destroy
     @group = Group.find(params[:id])
      @group.delete
    end


    def group_params
        params.require(:group).permit(:group_name,:description,:organizer_id,:picture_url) #:description,
    end

end
