class Task < ActiveRecord::Base
  validates :list_id, :title, presence: true

  belongs_to :list
end
