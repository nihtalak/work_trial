FactoryBot.define do
  factory :task do
    description { Faker::Lorem.sentence }
    user
    performer { FactoryBot.create(:user) }
    state { Task.states.keys.sample }
  end
end
