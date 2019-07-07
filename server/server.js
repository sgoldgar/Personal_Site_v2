const express = require('express');
const path = require('path');
// var mailgun = require('mailgun-js')({
//   apiKey: process.env.mailgun_api_key,
//   domain: process.env.mailgun_api_url
// });
var bodyParser = require('body-parser');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//body parser setup
// app.use(bodyParser.json()); //for parsing application/json
// app.use(bodyParser.urlencoded({extended:true})); //for parsing application/x-www-form-urlencoded

// //send form
// app.post('/contact', (req, res) => {
//   mailgun.messages().send({
//       from: `Portfolio Website Contact <postmaster@${process.env.mailgun_api_url}>`, // sender address
//       to: process.env.contact_email, // list of receivers
//       subject: `Porfolio Contact`,// Subject line
//       text: `Contact email from: ${req.body.name} - ${req.body.email} \n\n\n ${req.body.message}` // plaintext body
//     }, function (error, body) {
//       console.log('Message sending done:');
//       console.log(`Error: ${JSON.stringify(error)}`);
//       console.log(`Response: ${JSON.stringify(body)}`);
//     });
// });

// // Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
// });

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
