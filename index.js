const express = require("express");
const dbCONNECT = require("./model/databaseConnect");
const dotenv = require("dotenv")
dotenv.config();

/*
==========================================
             DATABASE CONNECTION
==========================================
*/
dbCONNECT(process.env.DATABASE_URL);
