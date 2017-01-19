class Task < ActiveRecord::Base
  validates :list_id, :title, presence: true

  belongs_to :list
  has_one :author, through: :list, source: :author
end
