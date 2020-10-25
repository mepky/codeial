const nodeMailer = require("../config/nodemailer");

//this is another way o exporting a method

exports.newComment = (comment) => {
    console.log("inside newComment mailer", comment),
        nodeMailer.transporter.sendMail({
                from: "mrcoder215@gmail.com",
                to: comment.user.email,
                subject: "NEW COMMENT IS NOW PUBLISHED",
                html: "<h1>Your comment is published </h1>",
            },
            (err, info) => {
                if (err) {
                    console.log("Error in sending mail", err);

                    return;
                }

                console.log("Message sent", info);
                return;
            }
        );
};