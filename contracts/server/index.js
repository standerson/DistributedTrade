/**
 * Application starts here.
 */
let debug      = require("debug")("telemetris:server"),
    express    = require("express"),
    bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/agreements", require("./routes/agreements"));
app.use("/assets", require("./routes/assets"));

module.exports = app;

