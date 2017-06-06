FactoryGirl.define do
  factory :user do
    first_name { Faker::Name.name }
    last_name { Faker::Name.name }
    user_name { Faker::LordOfTheRings.character }
    password { "password"}


    # factory :green_capy do
    #   color 'green'
    # end
  end
end
