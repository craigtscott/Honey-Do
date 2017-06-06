# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  list_id    :integer          not null
#  done       :boolean          default("false")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ActiveRecord::Base
  validates :list_id, :title, presence: true

  belongs_to :list
  has_one :author, through: :list, source: :author
end
