Duck.destroy_all
Student.destroy_all

10.times do
  Student.create(name: Faker::Name.name, mod: rand(1..5))
end

5.times do
  Duck.create(student_id: Student.all.sample.id, name: Faker::Dog.meme_phrase, description: Faker::Dog.breed)
end
