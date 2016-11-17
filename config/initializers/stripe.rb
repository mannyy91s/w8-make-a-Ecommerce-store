Rails.configuration.stripe = {
  :publishable_key => ENV['PUBLISHABLE_KEY'],
  :secret_key      => ENV['stripe_api_key']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
