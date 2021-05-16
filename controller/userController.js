const express = require('express');
let userModel= require('../model/userModel');
let config = require('../config/db');

let getUser = async (req, res, next) => {
  await userModel.find({}, function(err, result){
    if(err){
      console.log(err);
     }
    else{
         res.json(result);
     }
});
};
let getUserid = async (req, res, next) => {
  let  itemID = req.params.id ;
 await userModel.find({itemID:itemID}, function(err, result){
    if(err){
         console.log(err);
    }else{
         res.json(result);
   }
});
};

let createUser = async (req, res, next) => {
      const add = new userModel({
            itemID : req.body.itemID,
            firstName : req.body.firstName,
            lastName :req.body.lastName,
            email : req.body.email,    
            tel : req.body.tel,
            password : req.body.password
          });
       add.save(function(err,result){
            if(err){
              res.send(err);
            return;
          }
       else{
            res.json(result);
           }
       });
};
let updateUser = async (req, res, next) => {
      let edit = {};
      let query = { itemID : req.params.id };
      edit.firstName = req.body.firstName;
      edit.lastName = req.body.lastName;
      edit.email = req.body.email;
      edit.tel = req.body.tel;
      edit.password = req.body.password
      await userModel.update(query,edit,function(err, result){
      if(err){
            res.send(err);
            return;
      }
      else{
            res.json(result);
      }
});
};
let deleteUser = async (req, res, next) => {
      let query = { itemID : req.params.id };
      await userModel.remove(query, function(err, result){
           if(err){
               console.log(err);
           }
           else{
            res.json(result);
           }
       });
};


module.exports = {getUser,getUserid,updateUser,deleteUser,createUser};