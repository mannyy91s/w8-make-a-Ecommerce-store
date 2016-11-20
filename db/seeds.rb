# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'


info = CSV.foreach(Rails.root + "db/IronGloryInventory.csv", headers: true, :header_converters => :symbol)


info.each do |row|
 Patch.create!(product: row[:product],
 sku: row[:sku],
 price: row[:price].gsub(/\D+/, "").to_i * 100,
 available: row[:available].gsub(/\D+/, ""),
 size: row[:available].gsub(/:\d+/,""),
 year: row[:year],
 description: row[:description],
 category: Category.find_or_create_by(name: row[:category]),
 image: File.open(Rails.root + "app/assets/images/iron-glory-assets/iron-glory-products/#{row[:sku].downcase}.png", "rb")
)
end
