# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.where(email: 'vova@gmail.com').first_or_create!(password: 'pass1234', nickname: 'VO' )
User.where(email: 'steffen@gmail.com').first_or_create!(password: 'pass1234', nickname: 'SB')
