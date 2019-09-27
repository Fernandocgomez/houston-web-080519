# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Step.destroy_all

Npc.destroy_all

Npc.create({
    x: 0,
    y: 100,
    name: 'Barette'
})

Npc.create({
    x: 100,
    y: 100,
    name: 'Chase'
})

Npc.create({
    x: 200,
    y: 100,
    name: 'Michael'
})

Npc.create({
    x: 300,
    y: 100,
    name: 'Leslie'
})






Npc.create({
    x: 0,
    y: 300,
    name: 'Emily'
})

Npc.create({
    x: 100,
    y: 300,
    name: 'Josh'
})

Npc.create({
    x: 200,
    y: 300,
    name: 'Jade'
})

Npc.create({
    x: 300,
    y: 300,
    name: 'Kevin'
})






Npc.create({
    x: 0,
    y: 500,
    name: 'Israel'
})

Npc.create({
    x: 100,
    y: 500,
    name: 'Resham'
})

Npc.create({
    x: 200,
    y: 500,
    name: 'Jun'
})

Npc.create({
    x: 300,
    y: 500,
    name: 'Richard'
})

directions = [ 'left', 'right', 'up', 'down' ]

Npc.all.each do | npc |

    x = 0
    y = 0

    8.times do 
        direction = directions.sample
        duration = rand(300..1000)

        if direction == 'left'
            x -= duration
        end

        if direction == 'right'
            x += duration
        end

        if direction == 'up'
            y += duration
        end

        if direction == 'down'
            y -= duration
        end

        Step.create({ direction: direction, duration: duration, npc: npc })
    end

    if x > 0
        Step.create({ direction: 'left', duration: x, npc: npc })
    end

    if y > 0
        Step.create({ direction: 'down', duration: y, npc: npc })
    end

    if x < 0
        Step.create({ direction: 'right', duration: -1*x, npc: npc })
    end

    if y < 0
        Step.create({ direction: 'up', duration: -1*y, npc: npc })
    end


end