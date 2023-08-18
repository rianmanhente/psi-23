const {Op} = require('sequelize')
const Adress = require('../models/Adress');
const User = require('../models/User');

const index = async(req, res) =>{
    try{
        const adress = await Adress.findAll();
        return res.status(200).json({adress});
    } catch(err){
        console.log(err.message)
        return res.status(500).json({err});
    }
};

const create = async(req,res) => {
    try{
          const adress = await Adress.create(req.body);
          console.log(req.body);
          return res.status(201).json({msg: "A  ully registered!", adress: adress});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Adress.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Adress successfully deleted.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Adress not found.");
    }
};

const AdressAssociateUser = async(req,res) => {
    try {
        const {userId, adressId } = req.params;
        const user = await User.findByPk(userId);
        const adress = await Adress.findByPk(adressId);

        await adress.setUser(user);
        return res.status(200).json({msg: "Adress associated."});
    }catch(err){
        return res.status(500).json({err});
    }
}

module.exports = {
    create,
    index,
    destroy,
    AdressAssociateUser
}