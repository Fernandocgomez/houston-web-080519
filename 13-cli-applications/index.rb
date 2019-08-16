require_relative './config/environment.rb'
ActiveRecord::Base.logger = nil
prompt = TTY::Prompt.new

# %w(Scorpion Kano Jax) === [ "Scorpion", "Kano", "Jax"]

a = Artii::Base.new :font => 'slant'
prompt.say(a.asciify('Airlines'))

current_passenger = nil
while current_passenger == nil
    users_response = prompt.select("Please either:", [
        "Sign Up",
        "Login"
    ])
    if( users_response == "Sign Up")
        name = prompt.ask('What is your name?')
        password = prompt.ask('What is your password?')
        current_passenger = Passenger.create({
            name: name,
            password: password
        })
    end
    if( users_response == "Login")
        current_passenger = Passenger.where({
            name: prompt.ask('What is your name?'),
            password: prompt.ask('What is your password?')
        }).first
    end
end


while true
    users_response = prompt.select("What do you want to do?", [
        "Purchase Ticket",
        "See my Tickets",
        "See Other Passengers",
        "Quit"
    ])

    if users_response == "Purchase Ticket"
        names = {}
        Airline.order(name: :asc).each do | airline |
            names[airline.name] = airline.id
        end
        airline_id = prompt.select("What airline do you want to fly with?", names)
        Ticket.create({
            airline_id: airline_id,
            passenger_id: current_passenger.id
        })
    end

    if users_response == "See my Tickets"
        prompt.say("Your Tickets:")
        current_passenger.tickets.reload
        current_passenger.tickets.each do | ticket |
            prompt.say(ticket.airline.name)
        end
    end

    if users_response == "Quit"
        break
    end

    # if users_response == "Create Airline"
    #     puts "Please enter Airline Name: "
    #     airline_name = gets.chomp
    #     puts "When was the airline established?"
    #     established = gets.chomp
    #     Airline.create({
    #         name: airline_name,
    #         established: established
    #     }) 
    # end
end
