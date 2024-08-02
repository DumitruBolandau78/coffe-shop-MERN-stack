import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }
  ],
  favorites: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
      }
    }
  ]
})

User.methods.addToFavorites = function(id){
  const favorites = [...this.favorites];
  favorites.push({
    productId: id,
  });
  this.favorites = favorites;
  return this.save();
}

User.methods.deleteFromFavorites = function (id) {
  let favorites = [...this.favorites];
  favorites = favorites.filter(c => c.productId.toString() !== id.toString());
  this.favorites = favorites;
  return this.save();
}

User.methods.addToCart = function (product, quantity) {
  const cart = [...this.cart];
  const index = cart.findIndex(p => p.productId.toString() === product._id.toString());

  if (index >= 0) {
    cart[index].quantity = cart[index].quantity + quantity;
  } else {
    cart.push({
      productId: product._id,
      quantity
    });
  }

  this.cart = cart;
  return this.save();
}

User.methods.deleteFromCart = function (id) {
  let cart = [...this.cart];
  cart = cart.filter(c => c.productId.toString() !== id.toString());

  this.cart = cart;
  return this.save();
}

export default mongoose.model('users', User)