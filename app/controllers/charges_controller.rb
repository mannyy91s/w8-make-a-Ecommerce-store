class ChargesController < ApplicationController
  def new
  end

  def create
    # Amount in cents

    #keep code below until cart is ready

    @cart = Cart.find(params[:token])
    @amount = @cart.cart_subtotal

    #writing a test so frontend can by a patch without cart
    # @patch = Patch.find(params[:patch_id])
    # @amount = @patch.price


    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Iron Glory customer',
      :currency    => 'usd'
    )
    redirect_to thanks_path
    # render json: ["Thank you for shopping with us!"]

  rescue Stripe::CardError => e
    render json: [e.message], status: :unprocessable_entity
    # redirect_to root_path
  end



end
