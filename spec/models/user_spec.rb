# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  # What to test?
  #   Validations
  #   Associations
  #   Class Methods
  #   Error Messages

  # subject(:user) { User.new(name: 'carlo', color: 'yellow') }
    subject(:user) { FactoryGirl.build(:user) }

    describe 'validations' do
      it { should validate_presence_of(:first_name) }
      it { should validate_presence_of(:last_name) }
      it { should validate_presence_of(:user_name) }
      it { should validate_uniqueness_of(:user_name) }
      it { should validate_length_of(:password).is_at_least(6)
                                         .with_message(/password is too short/)}

      # it 'should validate a user' do
      #   test_user = FactoryGirl.build(:green_capy)
      #   test_user.valid?
      #   expect(green_capy.errors[:color]).to eq(['cannot be green!!'])
      # end
    end

  end
