const Cart = require("../../models/Cart");

const seedCart = async function () {
  try {
    await Cart.sync({ force: true });

    const carts = [];

    const cartData = [
      {
        name: "Carrinho1",
        payment_method: "cartão de crédito"
      },
      {
        name: "Carrinho2",
        payment_method: "dinheiro"
      },
      {
        name: "Carrinho3",
        payment_method: "cartão de débito"
      },
    ];

    for (let i = 0; i < cartData.length; i++) {
      const cart = await Cart.create(cartData[i]);
      carts.push(cart);
    }

    console.log("Cart created:", Cart);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedCart;
