const User = require("../../models/User");

const seedUser = async function () {
  try {
    await User.sync({ force: true });

    const users = [];

    // const API_KEY = 'live_8VYremO52ntEUkgG2CGcAVHxIKxJntXSDe9Kti8rMAVBEZHjdEtQhIW8x9qr6MeV';
    // const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

    // const photoReq = await fetch(url)
    // .then((response) => response.json())

    // const photoUrl = photoReq[0].url

    const usersData = [
      {
        name: "joazin",
        email: "joazin@.com",
        phone: "1233456677",
        password: "abc",
        image: "https://cdn2.thecatapi.com/images/eDsBV6sYe.jpg",
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "marcos",
        email: "marcos@.com",
        phone: "1233a456677",
        password: "abcd",
        image: "https://cdn2.thecatapi.com/images/2gc.jpg",
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "rian",
        email: "rian@.com",
        phone: "132456789875",
        password: "abcde",
        id: 3,
        image: "https://cdn2.thecatapi.com/images/MTYwNDgxNg.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let i = 0; i < usersData.length; i++) {
      const user = await User.create(usersData[i]);
      users.push(user);
    }

    console.log("Users created:", users);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedUser;
