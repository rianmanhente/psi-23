const { Router } = require("express");
const router = Router();
const CartController = require("../controllers/CartController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const AdressController = require("../controllers/AdressController");
const multer = require("multer");
const path = require("node:path");

//authentication uses
const AuthController = require("../controllers/AuthController");
const passport = require("passport");
router.use("/private", passport.authenticate('jwt', {session: false}));

//upload de imagens
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '../', 'uploads'))
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
            
        }
    })
})

//authentication routes
router.post("/login", AuthController.login);//
router.get("/private/getDetails", AuthController.getDetails);///

router.post("/User", UserController.create);//
router.get("/User/:id", UserController.show); //
router.get("/User", UserController.index); //
router.put("/User/:id", UserController.update); //
router.delete("/User/:id", UserController.destroy);//

router.post("/Product", upload.single("image"), ProductController.create);//
router.get("/Product/:id", ProductController.show); //
router.get("/Product", ProductController.index); //
router.put("/Product/:id", ProductController.update);
router.delete("/Product/:id", ProductController.destroy);//
router.put("/Product/purchase/:ProductId/User/:userId", ProductController.purchase);//
router.put("/Product/cancelPurchase/:id", ProductController.cancelPurchase);//

router.post("/Cart", CartController.create);//
router.get("/Cart/:id", CartController.show);//
router.get("/Cart", CartController.index);//
router.put("/Cart/:id", CartController.update);//
router.delete("/Cart/:id", CartController.destroy);//

router.post("/Adress", AdressController.create);//
router.get("/Adress", AdressController.index);//
router.delete("/Adress/:id", AdressController.destroy);//
router.put("/Adress/User/:userId/Adress/:adressId", AdressController.AdressAssociateUser)


module.exports = router;
