const EmailValidator = require("email-deep-validator");
const emailValidator = new EmailValidator();
const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/check.html");

});


app.get("/email", (req, res) => {
var email = req.query.email;
const func = async () => {
    const resData = await emailValidator.verify(email);
    console.log(resData);

    if (
        resData.wellFormed &&
        resData.validDomain == true &&
        resData.validMailbox == true
    ) {
        res.send("valid email");
    } 
    else {
        res.send("invalid email");
    }

};

func();
});


app.listen(4000, () => {
console.log("listening on port 4000");
});