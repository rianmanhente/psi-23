const Product = require("../../models/Product");

const seedProducto = async function () {
  try {
    await Product.sync({ force: true });

    const products = [];

    const productsData = [
      {
        name: "Headfone",
        price: 29.99,
        id: 1,
        category: "Headfones", 
        image: "1693273021884-1684110152461-headphone.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iphone",
        price: 19.99,
        id: 2,
        category: "Smartphones",
        image: "1690926723264-download.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Headfone Modular",
        price: 49.99,
        id: 3,
        category: "Headphones",
        image: "1693272895107-images.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let i = 0; i < productsData.length; i++) {
      const product = await Product.create(productsData[i]);
      products.push(product);
    }

    console.log("Products created:", products);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedProducto;
