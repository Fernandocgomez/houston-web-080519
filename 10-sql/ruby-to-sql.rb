# SELECT * FROM restaurants 
# JOIN receipts ON restaurants.id = receipts.restaurant_id
# JOIN customers ON receipts.customer_id = customers.id

class Restraunt

    def customers
        Receipts.all.each do | receipt |
            if(receipt.restaurant == self)
                results.push(receipt.customer)
            end
        end 
    end

end