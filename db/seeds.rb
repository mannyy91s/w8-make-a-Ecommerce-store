# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

info = Array.new
puts info.inspect
info = CSV.foreach(Rails.root + "db/IronGloryInventory.csv", headers: true, :header_converters => :symbol)

puts info.inspect
# csv = CSV.parse(info, :headers => true, :encoding => 'ISO-8859-1')
# puts csv.inspect
info.each do |row|
puts info.inspect
 Patch.create!(row.to_h)
puts info.inspect
end
