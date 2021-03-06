# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

vova = User.where(email: 'vova@gmail.com').first_or_create!(password: 'pass1234', name: 'Vova')
steffen = User.where(email: 'steffen@gmail.com').first_or_create!(password: 'pass1234', name: 'Steffen')

Task.where(description: 'Taste JavaScript').first_or_create!(user: steffen, performer: vova)
Task.where(description: 'Buy a unicorn').first_or_create!(user: vova, performer: steffen)
