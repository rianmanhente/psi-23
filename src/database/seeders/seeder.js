require('../../config/dotenv')();
require('../../config/sequelize');

const seedUser = require('./UserSeeder');
const seedProduct = require('./ProductSeeder');
const seedCart = require('./CartSeeder');

(async () => {
  try {
    await seedUser();
    await seedProduct();
    await seedCart();

  } catch(err) { console.log(err) }
})();


