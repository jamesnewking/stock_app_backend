const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// const whitelist = [`http://localhost:5000`,`http://localhost:6006`];
// const corsOptions = {
//   // credentials: true,
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// };
// app.use(cors(corsOptions)); // enable cors on the whitelist
app.use(cors()); // enable all domains
require('./routes')(app);

app.listen(PORT);