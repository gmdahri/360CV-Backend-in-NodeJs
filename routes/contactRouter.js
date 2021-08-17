const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Contact = require('../model/contact');

const contactRouter = express.Router();
contactRouter.use(bodyParser.json());

contactRouter.route('/')
    .get((req,res,next)=>{
        Contact.find({})
            .then((contacts)=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(contacts);
            },(err)=>next(err))
            .catch((err)=>next(err));
    })
    .post((req,res,next)=>{
        Contact.create(req.body)
            .then((contact)=>{
                console.log('Contact created',contact);
                res.statusCode=200;
                res.setHeader('Content-Type','applicaiton/json');
                res.json(contact);
            },(err)=>next(err))
            .catch((err)=>next(err));
    })
    .put((req,res,next)=>{
        res.statusCode=403;
        res.end('Put operation can not be performed');
    })
    .delete((req,res,next)=>{
        Contact.remove({})
            .then((resp)=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(resp);
            },(err)=>next(err))
            .catch((err)=>next(err));
    });

module.exports = contactRouter;