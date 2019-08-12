require_relative './Restaurant.rb'
require_relative './Customer.rb'
require_relative './Receipt.rb'

cfa = Restaurant.new('Chick-Fil-A')
whataburger = Restaurant.new('Whataburger')
starbucks = Restaurant.new('Starbucks')

kyle = Customer.new('Kyle')
dave = Customer.new('Dave')
april = Customer.new('April')

receipt_1 =  Receipt.new(15, kyle, cfa)
receipt_2 =  Receipt.new(18, kyle, starbucks)

# Receipt.new(20)

p kyle.restaurants


