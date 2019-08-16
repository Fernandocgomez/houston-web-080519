require 'json'

response = RestClient.get("https://aviation-edge.com/v2/public/airlineDatabase?key=fcffba-1d4753")
airlines = JSON.parse(response.body)

airlines.each do | airline | 
    Airline.create({
        name: airline["nameAirline"],
        established: airline["founding"]
    })
end

# Airline.create({
#     name: "United",
#     established: 1940
# })


# Airline.create({
#     name: "Jet Blue",
#     established: 1980
# })