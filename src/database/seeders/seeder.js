require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedProduct = require('./ProductSeeder');
const seedCart = require('./CartSeeder');
const seedAdress = require('./AdressSeeder');

(async () => {
  try {
    await seedUser();
    await seedProduct();
    await seedCart();
    await seedAdress();

  } catch(err) { console.log(err) }
})();


