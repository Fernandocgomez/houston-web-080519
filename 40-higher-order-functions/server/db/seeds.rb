# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create(name: '', x: 300, y: 300)

positions = (1...600).to_a

[
    "Roy",
    "Kurtis",
    "Feven",
    "Hans",
    "Hermann",
    "Luis",
    "Stefan",
    "Stefan",
    "Brendan",
    "Jason",
    "Carlos",
    "Maruf",
    "Ariq"
].each do | name |
    Npc.create(name: name, x: positions.sample, y: positions.sample)
end