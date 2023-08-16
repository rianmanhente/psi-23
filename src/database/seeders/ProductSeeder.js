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
        description: "Headfone com som bom ;)",
        category: "Headfones", 
        image: "1687349869895-images.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iphone",
        price: 19.99,
        id: 2,
        description: "Iphone 14 pro",
        category: "Smartphones",
        image: "1687742191893-download.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Headfone Modular",
        price: 49.99,
        id: 3,
        description: "Headfone modelo Modular",
        category: "Headphone",
        image: "1684012116006-headphone.jpg",
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
