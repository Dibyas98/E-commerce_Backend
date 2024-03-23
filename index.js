const express = require("express");
const dbCONNECT = require("./model/databaseConnect");
const dotenv = require("dotenv")
dotenv.config();
const app = express();

/*=========================DATABASE CONNECTION==================*/
dbCONNECT(process.env.DATABASE_URL);

const userRoutes = require("./router/user")



/*=======================TO CONVERT POST API BODY TO JSON FORMAT=================*/
app.use(express.json());




app.use("/api/user",userRoutes)

/*==============SERVER CONNECTION PORT=========================*/

app.listen(process.env.PORT, ()=> {
    console.log("Server is running in port 4000");
});
