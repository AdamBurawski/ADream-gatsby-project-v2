const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({ origin: true });
require("dotenv").config();

exports.sendEmail = functions.https.onRequest((request, response) => {
  sgMail.setApiKey(functions.config().sendgrid.key);
  const msg = {
    to: "adam.burawski@jbmultimedia.pl", // Change to your recipient
    from: "a.burawski.post@gmail.com", // Change to your verified sender
    subject: `Nowa wiadomość od ${request.body.name}`,
    text: `${request.body.name} ${request.body.phone} ${request.body.message}`,
  };

  cors(request, response, () => {
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
