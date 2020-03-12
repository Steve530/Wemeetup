class Api::GroupsController < ApplicationController
   
  def index
    @groups = Group.all
  end

    def create
        # debugger
        @group = Group.new(group_params)
        if @group.save
          render "api/groups/show"
        else
          render json: @group.errors.full_messages
        end
    end
    
    def show
        @group = Group.find(params[:id])
    end
    
    def update
        @group = Group.find(params[:id])
        if @group.save
            render "api/groups/show"
        else
        render json: @group.errors.full_messages
        end
    end

    def destroy
     @group = Group.find(params[:id])
      @group.delete
    end


    def group_params
        params.require(:group).permit(:group_name,:description,:picture_url) #:description,
      end

end
