require 'sqlite3'
db = SQLite3::Database.new('consumers.db')
db.results_as_hash = true

restaurants = db.execute('
    SELECT * FROM restaurants    
')

puts restaurants