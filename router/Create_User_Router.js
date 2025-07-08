
const express = require('express');
const { Create_User_Controller } = require('../Controller/Create_User_Controller');

const Create_User_Router = express.Router();

Create_User_Router.post("/create-new-user", Create_User_Controller);

exports.Create_User_Router = Create_User_Router;
