united_airline = {
    "name": 'United',
    "passengers": [
        {
          "name": "Scott",
          "distance": 250
        },
        {
          "name": "Joshua",
          "distance": 315
        },
        {
          "name": "Josh",
          "distance": 1701
        },
        {
          "name": "Jade",
          "distance": 5335
        },
        {
          "name": "Leslie",
          "distance": 581
        },
        {
          "name": "Emily",
          "distance": 7876
        },
        {
          "name": "Barrette",
          "distance": 3110
        },
        {
          "name": "Chandon",
          "distance": 2994
        },
        {
          "name": "Chase",
          "distance": 9214
        },
        {
          "name": "Israel",
          "distance": 2752
        },
        {
          "name": "Kevin",
          "distance": 4731
        },
        {
          "name": "Richard",
          "distance": 7645
        },
        {
          "name": "Resham",
          "distance": 292
        },
        {
          "name": "Jun",
          "distance": 5413
        },
        {
          "name": "Max",
          "distance": 2857
        },
        {
          "name": "Michael",
          "distance": 4295
        }
      ]
}

def total_distance(airline)
    total = 0
    airline[:passengers].each do | passenger |
        total += passenger[:distance]
    end
    return total
end

puts total_distance(united_airline)