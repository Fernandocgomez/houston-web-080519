require 'pry'
require_relative './book'
require_relative './author'
require_relative './book_author.rb'


puts "Author.new:"
josh = Author.new
puts josh.class == Author

puts "Book.new:"
offhanded_sorcery = Book.new('Offhanded Sorcery')
offhanded_sorcery_2 = Book.new('Offhanded Sorcery 2: The wrath of khan')

puts offhanded_sorcery.class == Book

puts "Book.all:"
puts Book.all.length == 1

puts "Book#title:"
# offhanded_sorcery.title = "Offhanded Sorcery"
puts offhanded_sorcery.title == "Offhanded Sorcery"

puts "BookAuthor.new:"
book_author_1 = BookAuthor.new(offhanded_sorcery, josh)
book_author_2 = BookAuthor.new(offhanded_sorcery_2, josh)

puts book_author_1.class == BookAuthor

puts "Author#books:"
puts josh.books


# binding.pry