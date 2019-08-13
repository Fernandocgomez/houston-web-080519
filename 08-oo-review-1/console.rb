require 'pry'
require_relative './book'
require_relative './author'
require_relative './book_author.rb'

josh = Author.new
puts "An Author:"
puts josh

book = Book.new("Offhanded Sorcery")
puts "A Book:"
puts book

puts "Book.all: "
book_2 = Book.new("The Annals of the Ninja")
puts Book.all


puts "Book title: "
puts book.title


puts "Book Authors:"
puts book_author_1 = BookAuthor.new(josh, book)
puts book_author_2 = BookAuthor.new(josh, book_2)


puts "Author#books: "
puts josh.books.length == 2

# binding.pry