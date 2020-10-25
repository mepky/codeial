const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "mrcoder215@gmail.com",
        pass: "Royrebel11",
    },
});

let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        Path.join(__dirname, "../views/mailers", relativePath),
        data,
        function(err, template) {
            if (err) {
                console.log("error in rendering template");
                return;
            }
            return mailHTML;
        }
    );
};
module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate,
};