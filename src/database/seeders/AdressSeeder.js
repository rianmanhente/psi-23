const Adress = require("../../models/Adress");

const seedAdress = async function () {
  try {
    await Adress.sync({ force: true });

    const adress= [];

    const adressData = [
      {
        cep: "22795045",
        streetName: "rua josé américo de almeida"
      },
      {
        cep: "22795047",
        streetName: "rua Gustavo corção"

      },   
      {
        cep: "22795049",
        streetName: "rua Joao paulo"

      },
    ];

    for (let i = 0; i < adressData.length; i++) {
      const adr = await Adress.create(adressData[i]);
      adress.push(adr);
    }

    console.log("Adress created:", Adress);
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedAdress;
