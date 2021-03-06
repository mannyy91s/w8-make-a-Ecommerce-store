class PatchSerializer < ActiveModel::Serializer
  attributes :id, :product, :sku, :price, :available, :year, :description, :category, :size, :category_id, :image
  has_many :line_items

  def image
    Refile.attachment_url(object, :image, :fit, 800, 800, format: "png")
  end

end
