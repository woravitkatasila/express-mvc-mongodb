const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
//router.get('/product', controller.getProduct);//ตรงนี้จะเรียกผ่านcontroller แทน
//ไปเรียก controller product
router.route('/user').get(controller.getUser)  //เรียก find
router.route('/user/:id').get(controller.getUserid)  //เรียก  find
router.route('/user/:id').put(controller.updateUser)  //เรียก update
router.route('/user/:id').delete(controller.deleteUser)  //เรียก delete
router.route('/user').post(controller.createUser)  //เรียก create
module.exports = router;